class Doctor < ApplicationRecord
  validates :first_name, :last_name, :image, :specicialist, presence: true 
end
