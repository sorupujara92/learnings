package com.ratelimit;


import com.ratelimit.entity.UserToken;
import com.ratelimit.repository.UsersRepository;
import com.ratelimit.repository.UsersTokenRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class AuthenticationFilter implements GlobalFilter {


  private static final String AUTHORIZATION_HEADER = "Authorization";
  @Autowired
  UsersTokenRepository usersTokenRepository;
  @Autowired
  UsersRepository usersRepository;

  @Override
  public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
    ServerHttpRequest request = exchange.getRequest();

    if (!request.getHeaders().containsKey("Authorization")) {
      return getErrorResponse(exchange).setComplete();
    } else {
      Optional<UserToken> authAccessToken =
          usersTokenRepository.findById(
              request.getHeaders().get(AUTHORIZATION_HEADER).get(0).replace("Bearer ", ""));

      if (!authAccessToken.isPresent()) {
        return getErrorResponse(exchange).setComplete();
      }

      return chain.filter(exchange);

    }

  }

  private ServerHttpResponse getErrorResponse(ServerWebExchange exchange) {
    ServerHttpResponse response = exchange.getResponse();
    response.setStatusCode(HttpStatus.FORBIDDEN);
    return response;
  }


}
