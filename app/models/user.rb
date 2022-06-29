class User < ApplicationRecord
  validates :first, :last, :image, :phone, presence: true
end
