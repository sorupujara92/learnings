package com.ratelimit.repository;

import com.ratelimit.entity.UserToken;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface UsersTokenRepository extends
    CrudRepository<UserToken, String> {

  @Modifying
  @Query("delete from UserToken u where u.email = ?1")
  void deleteAllByEmail(String email);

}