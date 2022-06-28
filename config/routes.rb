Rails.application.routes.draw do
  
  
  namespace :api do
    resources :doctors 
  end
  
end
