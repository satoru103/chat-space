Rails.application.routes.draw do
  devise_for :users
  root to: "messages#index"
  resources :messages, only: [:edit,:update]
  resources :groups, only:[:new,:create,:edit,:update]

end
