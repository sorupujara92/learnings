package com.soru.taskexecutor.task;

public class WebhookTask implements Runnable{

  private Object data;
  public WebhookTask(Object data){
    this.data = data;
  }

  @Override
  public void run() {
    System.out.println("webhook task"+this.data);
  }
}
