class User < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments
  
  validates :first, :last, :image, :phone, presence: true
end
