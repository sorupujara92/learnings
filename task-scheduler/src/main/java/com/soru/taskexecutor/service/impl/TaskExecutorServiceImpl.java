package com.soru.taskexecutor.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.soru.taskexecutor.model.TaskMessage;
import com.soru.taskexecutor.service.TaskExecutorService;
import com.soru.taskexecutor.task.FunctionTask;
import com.soru.taskexecutor.task.WebhookTask;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class TaskExecutorServiceImpl implements TaskExecutorService {

  static ExecutorService executorService = Executors.newFixedThreadPool(10);

  @Override
  public void executeTask(String jsonData) {
    try {
      if (jsonData != null) {
        TaskMessage tm = new ObjectMapper().readValue(jsonData, TaskMessage.class);
        switch(tm.getMessageType().getType()) {
          case 2:
            executorService.execute(new FunctionTask(jsonData));
            break;
          case 1:
            executorService.execute(new WebhookTask(jsonData));
            break;
          default:
            throw new IllegalArgumentException("Invalid type");
        }
      } else {
        log.error("Error in json format");
      }
    }catch (Exception e){
      log.error("Error in json format");
    }
  }

}
