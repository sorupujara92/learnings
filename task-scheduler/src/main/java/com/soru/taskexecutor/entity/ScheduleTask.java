package com.soru.taskexecutor.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * ScheduleTask entity.
 */
@Getter
@Setter
@ToString(callSuper = true)
@Entity
@Table(name = "schedule_tasks")
public class ScheduleTask {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(name = "description")
  private String description;

  @Column(name = "starting_point")
  private Integer startingPoint;

  @Column(name = "time_unit")
  private String timeUnit;

  @Column(name = "type")
  private String type;

  @Column(name = "data")
  private String data;

}
