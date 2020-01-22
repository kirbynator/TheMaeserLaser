class Article < ApplicationRecord
  def self.search(query)
    find_by_sql(["
    select * From articles
    where LOWER(title) LIKE ?
    OR LOWER(author) LIKE ?
    OR LOWER(tags) LIKE ?
    ", query, query, query])
  end
end