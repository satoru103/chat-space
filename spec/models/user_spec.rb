require 'rails_helper'

RSpec.describe User, type: :model do
  
    it "is valid with title, text" do
      article = Articles.new(
        title: "加藤純一",
        text: "加藤純一？　神"
        )
      expect(article).to be_valid
    end
end