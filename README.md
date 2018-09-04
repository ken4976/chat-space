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

### Association
-has_many :groups, throught: :members
-has_many :members
-has_many :messages

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foregin_key: true|
|group_id|integer|foregin_key: true|

### Association
-belongs_to :user
-belongs_to :group

##groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
-has_many :users, through: :members
-has_many :messages
-accept_nested_attributes_for :members

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group_id|integer|foregin_key: true|
|user_id|integer|foregin_key: true|

### Association
-belongs_to :user
-belongs_to :group
