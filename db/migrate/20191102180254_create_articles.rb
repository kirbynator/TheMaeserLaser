class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.text :body
      t.string :tags
      t.string :image

      t.timestamps
    end
  end
end
