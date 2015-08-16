class CreateRelations < ActiveRecord::Migration
  def change
     create_table :relations do |t|
      t.references :child
      t.references :parent
    end
  end
end
