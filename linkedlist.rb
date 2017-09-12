

first = Node.new()
second = Node.new()
third = Node.new()
first.item("to")
second.item("be")
third.item("or")
first.next(second)
second.next(third)
x = first
while !x.nil?
  p x.item()
  x = x.next
end

# class LinkedList
#   @first
#   @count
#   class Node
#     @item
#     @next
#     def item(item=nil)
#       item.nil? ? @item : @item = item
#     end
#     def next(node=nil)
#       node.nil? ? @next : @next = node
#     end
#   end
#   def push(item)
#     Node.new()
#     temp = @first.item
#     @first = @first.next()
#     @first.next = temp
#   end
# end
