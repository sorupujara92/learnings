package com.soru.taskexecutor.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskMessage {

  private MessageType messageType;
  private Object data;
}
