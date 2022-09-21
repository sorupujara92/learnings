package com.soru.taskexecutor.config;

import com.soru.taskexecutor.entity.ScheduleTask;
import com.soru.taskexecutor.repository.ScheduleTaskRepository;
import com.soru.taskexecutor.service.SchedulePeriodicTaskService;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.util.Streamable;

@Configuration
@ComponentScan(
    basePackages = {
        "com.soru.taskexecutor",
    })
@EntityScan(basePackages = {"com.soru.taskexecutor.entity"})
@EnableJpaRepositories(basePackages = {"com.soru.taskexecutor.repository"})
public class DataSourceConfig {

  @Autowired
  SchedulePeriodicTaskService schedulePeriodicTaskService;
  @Autowired
  private ScheduleTaskRepository scheduleTaskRepository;
  private List<ScheduleTask> scheduleTaskList;

  @PostConstruct
  public void init() {
    scheduleTaskList = Streamable.of(scheduleTaskRepository.findAll()).toList();
    for (ScheduleTask scheduleTask : scheduleTaskList) {
      schedulePeriodicTaskService.scheduleTask(scheduleTask.getStartingPoint(),
          scheduleTask.getTimeUnit(), scheduleTask.getType(), scheduleTask.getData());
    }
  }


}