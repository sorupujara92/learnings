package com.soru.taskexecutor.service.impl;

import com.soru.taskexecutor.model.MessageType;
import com.soru.taskexecutor.service.SchedulePeriodicTaskService;
import com.soru.taskexecutor.task.FunctionTask;
import com.soru.taskexecutor.task.WebhookTask;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import org.springframework.stereotype.Service;

@Service
public class SchedulePeriodicTaskServiceImpl implements SchedulePeriodicTaskService {

  @Override
  public void scheduleTask(int startingPoint, String timeUnit, String type,String data) {
    switch (MessageType.valueOf(type).getType()) {
      case 2:
        //TODO see if it already ran for the day and put delay accordingly
        Executors.newScheduledThreadPool(1)
            .schedule(new FunctionTask(data), 0, TimeUnit.valueOf(timeUnit));
        break;
      case 1:
        //TODO see if it already ran for the day and put delay accordingly
        Executors.newScheduledThreadPool(1)
            .schedule(new WebhookTask(data), 0, TimeUnit.valueOf(timeUnit));
        break;
      default:
        throw new IllegalArgumentException("Invalid type");
    }
  }
}
