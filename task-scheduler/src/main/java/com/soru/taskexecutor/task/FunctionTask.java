package com.soru.taskexecutor.task;

public class FunctionTask implements Runnable{

  private Object data;
  public FunctionTask(Object data){
    this.data = data;
  }

  @Override
  public void run() {
    System.out.println("function task"+this.data);
  }
}
