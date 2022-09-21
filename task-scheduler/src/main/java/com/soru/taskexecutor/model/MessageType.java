package com.soru.taskexecutor.model;


/**
 * MessageType.
 */
public enum MessageType {

  WEBHOOK(1),
  FUNCTIONS(2);

  /**
   * the instance type.
   */
  private final int type;

  /**
   * Ctor.
   *
   * @param type the instance type.
   */
  MessageType(final int type) {
    this.type = type;
  }

  /**
   * Value of dynamic field type.
   *
   * @param type the type
   * @return the dynamic field type
   */
  public static MessageType valueOf(final int type) {

    for (final MessageType messageType : MessageType.values()) {
      if (messageType.getType() == type) {
        return messageType;
      }
    }

    throw new IllegalArgumentException("no type found for " + type);
  }

  /**
   * Gets type.
   *
   * @return the type
   */
  public int getType() {
    return type;
  }


}