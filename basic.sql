use arifData ;
/* create database arifData ; */
create table tablesheet(
	serial int,
    name char(10),
    department char(10) 
    );  
create table tablesheet1(
	serial int,
    number int(10),
    adderess varchar(50),
    district varchar(50),
    primary key (number),
    foreign key (serial)
    references tablesheet(serial)
    );
    SHOW CREATE TABLE tablesheet ;
    select * from tablesheet ;
	insert into tablesheet(serial, name, department)
    values (3, 'neha','eco'), (4, 'seneha','math')

    alter table tablesheet ;
    add column age int(3);
    update tablesheet set age = 20 where serial = 3 ; 
    hello
