# chat-space DB設計

## userテーブル
| Column | Type | Options |
| ------ | ----| ------- |
| name | string | null: false |
| e-mail | string | null: false,unique :true |
| password| string | null: false |
### Assicuation_usersテーブル
- has_many :groups, through: :group_users
- has_many :messages
- has_many :group_users

## messagesテーブル
| Column | Type | Options |
| ------| ---- | ------- |
| user_id | integer | null :false,foreign_key: true |
| group_id | integer | null :false,foreign_key: true |
| body | text | null :false |
| image | string | null :true |
### Assicuation_messagesテーブル
- belongs_to :user
- belongs_to :group
- has_many :group_users
 
## groupテーブル
| Column | Type | Options |
| ------ | ---- | ------- |
| id || null :false | null :false |
| group_name | integer | null :false |
### Assicuation_groupテーブル
- has_many :users, through: :group_users
- has_many :messages
- has_many :group_users

## group_usersテーブル
| Column | Type | Options |
| ------ | ---- | ------- |
| user_id | integer | null :false,foreign_key: true |
| group_id | integer | null :false,foreign_key: true |
### Assicuation_group_usersテーブル
- belongs_to :user
- belongs_to :group
