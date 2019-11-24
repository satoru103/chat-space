# chat-space DB設計

## userテーブル
| Column | Type | Options |
| ------ | ----| ------- |
| name | string | null: false,index: true |
| e-mail | string | null: false,unique :true |
| password| string | null: false |
### Assicuation_userテーブル
- has_many :groups, through: :group_users
- has_many :messages
- has_many :group_users

## messagesテーブル
| Column | Type | Options |
| ------| ---- | ------- |
| user | references | null :false,foreign_key: true |
| group | references | null :false,foreign_key: true |
| body | text ||
| image | string ||
### Assicuation_messagesテーブル
- belongs_to :user
- belongs_to :group
 
## groupテーブル
| Column | Type | Options |
| ------ | ---- | ------- |
| name | integer | null :false |
### Assicuation_groupテーブル
- has_many :users, through: :group_users
- has_many :messages
- has_many :group_users

## group_usersテーブル
| Column | Type | Options |
| ------ | ---- | ------- |
| user | references | null :false,foreign_key: true |
| group | references | null :false,foreign_key: true |
### Assicuation_group_usersテーブル
- belongs_to :user
- belongs_to :group
