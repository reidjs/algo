#dijkstras algo for evaluating expressions
operators = []
values = []
string = "((5 + 3) - 8)"
s = []
string.each_char do |c|
 s << c
end
p s
while s.length > 0
  atom = s.shift
  if atom == "(" || atom == " "
    ;
  elsif atom == "+"
    operators << atom
  elsif atom == "-"
    operators << atom
  elsif atom == ")"
    #evaluate everything
    op = operators.pop
    v = values.pop
    if (op == "+")
      v = values.pop + v
    elsif (op == "-")
      v = values.pop - v
    end
    values.push(v)
  else
    values << atom.to_i
  end
end
p values[0]
