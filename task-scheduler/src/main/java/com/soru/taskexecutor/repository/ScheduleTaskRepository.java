package com.soru.taskexecutor.repository;

import com.soru.taskexecutor.entity.ScheduleTask;
import org.springframework.data.repository.CrudRepository;

/**
 * the ScheduleTaskRepository.
 */
public interface ScheduleTaskRepository extends
    CrudRepository<ScheduleTask, Integer> {


}
