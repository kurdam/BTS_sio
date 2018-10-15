def matrix33 (A11,A12,A13,A21,A22,A23,A31,A32,A33,B11,B12,B13,B21,B22,B23,B31,B32,B33):
  C11=A11*B11+A12*B21+A13*B31
  C12=A11*B12+A12*B22+A13*B32
  C13=A11*B13+A12*B23+A13*B33
  C21=A21*B11+A22*B21+A23*B31
  C22=A21*B12+A22*B22+A23*B32
  C23=A21*B13+A22*B23+A23*B33
  C31=A31*B11+A32*B21+A33*B31
  C32=A31*B12+A32*B22+A33*B32
  C33=A31*B13+A32*B23+A33*B33
  print("({},{},{})".format(C11,C12,C13))
  print("({},{},{})".format(C21,C22,C23))
  print("({},{},{})".format(C31,C32,C33))

matrix33(0,1,-1,-3,4,-3,-1,1,0,0,1,-1,-3,4,-3,-1,1,0)


def matrix22 (a,b,c,d,e,f,g,h):
  w=a*e+b*g
  x=a*f+b*h
  y=c*e+d*g
  z=c*f+d*h
  print("({},{})".format(w,x))
  print("({},{})".format(y,z))

matrix22(0,1,2,3,4,5,6,-3)


#version plus propre

 

mat1 = [[1,-1,1],[3,0,6],[0,2,1]]
mat2 = [[3,0,-1],[-2,1,7],[1,0,1]]


mat3 = [[0,0,0],[0,0,0],[0,0,0]]

for i in range(len(mat1)):
    for j in range(len(mat1)):
        for k in range(len(mat1)):
            mat3[i][j] += mat1[i][k] * mat2[k][j]
