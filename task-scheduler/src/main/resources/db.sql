create table schedule_tasks
(
    id                      INTEGER  AUTO_INCREMENT,
    description             VARCHAR(40),
    starting_point          INTEGER NOT NULL,
    time_unit               VARCHAR(40)  NOT NULL,
    type                    VARCHAR(40)  NOT NULL,
    data                    VARCHAR(40),
    PRIMARY KEY (id)
);


insert into schedule_tasks(starting_point,time_unit,type) values(1,'DAYS','WEBHOOK');