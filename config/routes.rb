Rails.application.routes.draw do
  
  
  namespace :api do
    resources :doctors 

    resources :users 
  end
  
end
