package com.ms1.controller;


import com.ms1.Ms2Client;
import com.ms1.ResponseString;
import java.io.IOException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

@RestController
@RequestMapping("/ms1")
public class MS1Controller {

  @GetMapping("/testms1")
  public String test(@RequestHeader String token) throws IOException {
    Retrofit retrofit = new Retrofit.Builder()
        .baseUrl("http://localhost:8084")
        .addConverterFactory(GsonConverterFactory.create())
        .build();
    Ms2Client service = retrofit.create(Ms2Client.class);

    Call<ResponseString> callSync = service.getms2(token);
    
    Response<ResponseString> response = callSync.execute();
    return response.body()+"ms1";
  }
}