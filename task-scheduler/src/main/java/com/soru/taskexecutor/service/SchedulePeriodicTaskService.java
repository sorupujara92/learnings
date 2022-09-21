package com.soru.taskexecutor.service;

public interface SchedulePeriodicTaskService {

  void scheduleTask(int startingPoint,String timeUnit,String type,String data);
}
