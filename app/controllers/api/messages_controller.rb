class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_message_id = params[:id].to_i
    @messages = group.messages.includes(:user).where("id > #{last_message_id}")
  end

  private
  def tweet_pramas
    params.require(:user).permit(:name, :job_id)
  end

end