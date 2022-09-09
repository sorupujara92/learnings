package com.ratelimit.repository;

import com.ratelimit.entity.Users;
import org.springframework.data.repository.CrudRepository;

/**
 * the UsersRepository.
 */
public interface UsersRepository extends
    CrudRepository<Users, String> {


}