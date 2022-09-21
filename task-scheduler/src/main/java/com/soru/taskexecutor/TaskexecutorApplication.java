package com.soru.taskexecutor;

import com.soru.taskexecutor.service.TaskExecutorService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TaskexecutorApplication {

	@Autowired
	TaskExecutorService taskExecutorService;
	public static void main(String[] args) {
		SpringApplication.run(TaskexecutorApplication.class, args);
	}

	@RabbitListener(
			queues = "${rabbit.task.queue:taskqueue}")
	public void recievedMessage(String jsonData) {
		taskExecutorService.executeTask(jsonData);
	}
}
