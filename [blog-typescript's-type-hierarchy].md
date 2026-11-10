# TypeScript Type Hierarchy

Introduction
Type script type hierarchy are Top types(any,unknown),core types(string,name),unit types(void),Nulish type(null),Literal types("pending,admin),anti-sub-type(undefined) and Bootm type(never).Types script is strongly type programming building on top javascript.so type script hierarchy is very important for typescript.its explain how different types of data relate to each other and its also helps type compatibility.

# Top Types

Important types in type hierarchy are any and unknown.And never is Bottom type.Top types accept values of almost any type.any and unknown both are top type.

# Why unknown is preferred?

unknown is alwayes prefer because it is a sefer top type.It acceps values of any types,but must check the types before performing type-specific operation.

# Why any is not preferred?

Any assaign value without type-checking.Its crate difficulties to maintain code.Thats why unknown is alwayes preferred any is not.

# conclusion

Typescript type hierarchy helps us to write bettercode.Reduce bugs and helps us to maintain our code.
