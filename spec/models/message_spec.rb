require 'rails_helper'

RSpec.describe Message, type: :model do
  # メッセージが保存出来る場合
  describe '#create' do
    context 'can save' do
      it 'is valid with body' do
        expect(build(:message, image: nil)).to be_valid
      end

    # 画像があれば保存できる
      it 'is valid with image' do
        expect(build(message:, body:nil)).to be_valid
      end

    # メッセージと画像があれば保存できる
      it 'is valid with body and image' do
        expect(build(message:)).to be_valid
      end
    end

  
    context 'can not save' do
      # メッセージも画像も無いと保存できない
      it 'is invalid without body and image' do
        message = build(:message, body: nil, image: nil)
        message.valid?
        expect(message.errors[:body]).to include("can't be blank")
      end

      it 'is invalid without group_id' do
        # group_idが無いと保存できない
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("must exist")
      end

      it 'is invaid without user_id' do
        # user_idが無いと保存できない
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("must exist")
      end
    end
  end