Rails.application.routes.draw do
  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  resources :donations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
