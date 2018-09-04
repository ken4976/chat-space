# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foregin_key: true|
|group_id|integer|foregin_key: true|



##groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|



## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group_id|integer|foregin_key: true|
|user_id|integer|foregin_key: true|

