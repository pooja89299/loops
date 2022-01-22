# magic_square = [
#     [8, 3, 4],
#     [1, 5, 9],
#     [6, 7, 2]
# ] 
# i=0
# s=0
# while i<len(magic_square):
#     col=0
#     while col<len(magic_square):
#         s=s+magic_square[i][col]
#         col=col+1
#         break
#     i=i+1
# print(s)
# x=0
# s1=0
# while x<len(magic_square):
#     row=0
#     while row<len(magic_square):
#         s1=s1+magic_square[x][row]
#         row=row+1
#         break
#     x=x+1
# print(s1)
# k=0
# s2=0
# while k<len(magic_square):
#     dig=0
#     while  dig<len(magic_square):
#         if k==dig:
#             s2=s2+magic_square[k][dig]
#         dig=dig+1
#     k=k+1
# print(s2)
# if s==s1==s2:
#     print("it is magic square")
# else:
#     print("it is not magic square")





# sum=0
# i=1
# while i<=10:
#     num=int(input("enter a number:"))
#     sum=sum+num
#     i=i+1
# print(sum,"total")




# d=[[7,8,9,],[6,3,2]]
# i=0
# while i<len(d):
#     k=0
#     while k<len(d[i]):
#         print(d[i][k])
#         k=k+1
#     i=i+1
# print(d)








# numbers=[23,56,78,12,32,55,20,1]
# i=0
# second=0
# while i<len(numbers):
#     if numbers[i]>second:
#         second=numbers[i]
#         numbers.remove(second)
#     j=0
#     a=0
#     while j<len(numbers):
#         if numbers[i]>a:
#             a=numbers[j]
#         j=j+1
#     i=i+1
# print(a)




# p=[1,3,4,5,6,7,8]
# i=0
# m=1
# while i<len(p):
#     m=m*p[i]
#     i=i+1
# print(m)






# n= [6,7,8,3,10,11,23]
# min=n[0]
# for i in n:
#     if i<min:
#         min=n[i]
# print(min)




# a=["sonam"]
# i=0
# count=0
# while i<len(a):
#     n=a[i]
#     j=0
#     while j<len(n):
#         count=count+1
#         j=j+1
#     i=i+1
# print(count)





# while i<len(l):
#     if l[i]=="over":
#         continue
#     print(l[i])
#     i+=1 






# numbers=[23,56,78,12,32,55,20,1]
# i=0
# second=0
# b=0
# while i<len(numbers):
#     if numbers[i]>second:
#         second=numbers[i]
#         numbers.remove(second)
#     j=0
#     a=0
#     while j<len(numbers):
#         if numbers[i]>a:
#             a=numbers[j]
#         j=j+1
#     i=i+1
# print(a)






# num=[1,2,3,4,5,6,7,8,9]
# i=0
# count=0
# for i in num:
#     count=count+1
# print(count) 





# a={}
# use



# i=10
# while i>=1:
#     print(i)
#     i=i-1





# a=["qwertyuio","qwertyuioptrtiuoppoiiytytewrew","erty","wert"]
# i=0
# k=[]
# length=0
# while i<len(a):
#     if len (a[i])>length:
#         length=len(a[i])
#         j=a[i]
#     i=i+1
# k.append(j)
# print(k)




# num=int(input("enter a number"))
# if num=="-":
#     print(num)
# else:
#     print(-num)






# num=input("enter a number:")
# num1=list(num)
# num3=len(num1)
# i=0
# n={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"}
# while(i<num3):
#     print(n[int(num1[i])],end=" ")
#     i=i+1