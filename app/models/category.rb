class Category < ActiveRecord::Base
  # Remember to create a migration!
  has_many :resource_categories
  has_many :resources, through: :resource_categories
end
