package com.ratelimit.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
@Entity
@Table(name = "users_token")
public class UserToken implements Serializable {

  @Id
  @Column(name = "id")
  private String id;

  @Column(name = "email")
  private String email;


}
