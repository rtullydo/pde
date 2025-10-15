var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-lecture-1",
  "level": "1",
  "url": "sec-lecture-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Lecture 1",
  "body": " Lecture 1  Intro to PDE and basic terminology  We begin the study of partial differential equations , which are equations involving an unknown function in several variables and its partial derivatives. The order of a PDE is the highest degree partial derivative appearing in the equation. For example, given a relationship between independent variables and a dependent variable , the most general PDE of first order is As is typical in partial derivatives, we'll often use the less cumbersome notation .  Given the same variables , the most general PDE of second order is   Note: we've implicitly asserted here that the functions we're considering have sufficient regularity so that Clairaut's theorem holds - that is, mixed partial derivatives are equal. One condition that is sufficient here is that functions have continuous second derivatives, which is a class of functions usually denoted . The solution to a PDE is a function that satisfies the equation on some open region in .  Here are some examples of PDEs:                                These equations are fundamental.  A useful way to write a PDE is in operator notation. For example, can be written , where is the differential operator . Note that An operator is called linear if for any functions and constants . The operator is linear. On the other hand, since , the equation cannot be written in linear operator form.  An equation that can be written as a linear operator is called a linear PDE. Otherwise, the PDE is called nonlinear . An linear PDE is called homogeneous if it has the form . If for a non-zero function , then the equation is called inhomogeneous or nonhomogeneous.  Why is linearity such a useful condition to consider? From a practical standpoint, linear equations allow us to use techniques from linear algebra. From a geometric perspective, given two solutions to a linear PDE , any linear combination is also a solution. (This is often called the principle of superposition .) Because linear algebra is so useful and so powerful, primarily we'll be considering linear PDEs with constant coefficients. (In fact, many strategies for studying nonlinear PDEs involve approximation locally by linear systems.)   Solutions to PDE  Let us look at some example solutions to PDEs.  Consider the differential equation Using \"partial integration\", we get There are arbitrary functions in the solution. This is typical. The number of such arbitrary functions will depend on the order of the PDE.    Solve . This is essentially an ODE in the variable . The differential equation is solved by , and so the solution to is given by which can be verified by calculation.   PDEs have significantly more complicated solutions than ODEs, as functions of two or more variables exhibit behavior that cannot occur in one variable. (As an example, rational functions of two variables can have curves of singularities, which is prevented by the fundamental theorem of algebra in one variable.)   "
},
{
  "id": "sec-lecture-1-3-3",
  "level": "2",
  "url": "sec-lecture-1.html#sec-lecture-1-3-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "Consider the differential equation Using \"partial integration\", we get There are arbitrary functions in the solution. This is typical. The number of such arbitrary functions will depend on the order of the PDE.  "
},
{
  "id": "sec-lecture-1-3-4",
  "level": "2",
  "url": "sec-lecture-1.html#sec-lecture-1-3-4",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " Solve . This is essentially an ODE in the variable . The differential equation is solved by , and so the solution to is given by which can be verified by calculation.  "
},
{
  "id": "sec-lecture-2",
  "level": "1",
  "url": "sec-lecture-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Lecture 2",
  "body": " Lecture 2  First Order Linear Equations  Consider the equation where are constants, not both zero. We'll being by looking at two initial methods for solving this equation. First, we'll introduce what is sometimes called the method of characteristics . We want to find curves in on which the PDE acts like an ODE (which will allow us to use basic ODE techniques in the solution). First, observe that the directional derivative of in the direction . Where is such a constant? The value of is constant when the directional derivative is zero, which happens on any line parallel to , all of which have the form for constants . (These are called the characteristic lines .) But then the value of at only depends on which particular line happens to fall on, which is to say only depends on the value . Another way to state this is that the solution to must have the form where is any differentiable function of one variable. For example, we can show that when , the function is a solution. and so   This also suggests a linear change of variables. Let and (this is essentially decomposing the function via the gradient at each point). Then becomes , which is an ODE in . Since , solving gives for some function , which is to say that .  A linear coefficient equation  Solve given the intial condition .  By the above discussion, we know that the solution has the form . We have enough information to find . Since , set . Then . Hence, the solution to the PDE with initial condition is .    A variable coefficient equation  Consider the equation As before, notice that the equation implies that which means that curves with tangent vector given by keep constant. A curve with tangent vector given by has slope at every point, and so the curve satisifies the ODE Solutions to this equation are functions of the form (These are the characteristic curves .) On each such curve, is constant, which we can check with the chain rule: This means that the value of on the curve is determined entirely by , as .  As , we have , and so That is, is a function of . Thus, is the general solution, where is an arbitrary function.    A more complicated example  Consider the equation We can rewrite this as , and so is constant along curves with tangent vectors given by . This leads to the ODE which has solution implictly given by and so depends on Then the general solution is where is arbitrary.    "
},
{
  "id": "sec-lecture-2-2-4",
  "level": "2",
  "url": "sec-lecture-2.html#sec-lecture-2-2-4",
  "type": "Example",
  "number": "1.2.1",
  "title": "A linear coefficient equation.",
  "body": "A linear coefficient equation  Solve given the intial condition .  By the above discussion, we know that the solution has the form . We have enough information to find . Since , set . Then . Hence, the solution to the PDE with initial condition is .  "
},
{
  "id": "sec-lecture-2-2-5",
  "level": "2",
  "url": "sec-lecture-2.html#sec-lecture-2-2-5",
  "type": "Example",
  "number": "1.2.2",
  "title": "A variable coefficient equation.",
  "body": " A variable coefficient equation  Consider the equation As before, notice that the equation implies that which means that curves with tangent vector given by keep constant. A curve with tangent vector given by has slope at every point, and so the curve satisifies the ODE Solutions to this equation are functions of the form (These are the characteristic curves .) On each such curve, is constant, which we can check with the chain rule: This means that the value of on the curve is determined entirely by , as .  As , we have , and so That is, is a function of . Thus, is the general solution, where is an arbitrary function.  "
},
{
  "id": "sec-lecture-2-2-6",
  "level": "2",
  "url": "sec-lecture-2.html#sec-lecture-2-2-6",
  "type": "Example",
  "number": "1.2.3",
  "title": "A more complicated example.",
  "body": " A more complicated example  Consider the equation We can rewrite this as , and so is constant along curves with tangent vectors given by . This leads to the ODE which has solution implictly given by and so depends on Then the general solution is where is arbitrary.  "
},
{
  "id": "sec-lecture-3",
  "level": "1",
  "url": "sec-lecture-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Lecture 3 - Three fundamental equations",
  "body": " Lecture 3 - Three fundamental equations   Diffusion  Imagine a drop of food coloring placed in a glass of water. The dye spreads out, or diffuses into the liquid. The diffusion equation describes how this happens. Many physical processes can be modeled by diffusion, probably most notably the transfer of heat in a medium.  We will derive a simple diffusion equation in one variable. Imagine a thin tube arranged along the -axis filled with a static liquid. Let be the mass concentration of dye in the tube at position at time . A simple physical observation is that the dye moves in the liquid at a rate proportional to the concetration gradient at a given point. Fix a small segment of the tube between two positions . The mass of dye in the small segment is This gives On the other hand, as flow is proportional to the contentration gradient.  Equating these expressions for , we see Now take the derivative of this expression with respect to and apply the Fundamental Theorem of Calculus, which gives and make the observation that this is equivalent to    Simple diffusion in 1D  The simple diffusion equation or heat equation on the line is    Now, let's do it again, but this time in 3D. Instead of a small segment of a tube, imagine a small sphere in 3D space, with the interior ball denoted and the boundary sphere . The mass concentration of the dye is given by at position and time . The mass of dye inside is and as before As in the 1D case, we'll make the simplfying assumption that the movement of the dye inside is proportional to the concentration gradient with constant , but this time we need to account for all of the boundary points in . At each point in , choose an outward normal vector . Then the flux of dye through the surface locally at a point is proportional to the outward concentration gradient through the surface area unit , which we can write as the expression . To add up the net change in mass, we get As before, we set the two expressions for equal to get Now apply the divergence theorem.   Divergence theorem  Given a solid region with closed boundary surface , an outward normal to and a function ,    Then Then we conclude (invoking A LOT of high level math) that since for any small ball that    Simple diffusion in 3D  The simple diffusion equation in space or 3D heat equation is      The wave equation   1D Wave equation  For , the 1D wave equation is     3D Wave equation  For , the 3D wave equation is      Laplace's equation  In any of the previous equations we have that the physical scenario does not change with respect to time, we get the reduction The is called Laplace's equation and the solutions to the equation are called harmonic functions .   "
},
{
  "id": "sec-lecture-4",
  "level": "1",
  "url": "sec-lecture-4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Lecture 4 - Well-posed problems and classification",
  "body": " Lecture 4 - Well-posed problems and classification   Note on integrals and equalities   Equality of integrands  If are continuous functions both defined on an open domain , and for every ball we have then on .     Well-posed problems  In order to extract specific solutions from a PDE, we'll want to introduce some kind of auxiliary constraints on our problems. Ideally, we choose conditions that allow a solution to exist, and that the solution be a unique solution at least on some domain. In many cases, we'd also like our solutions not to vary much if we make small changes to the constraints. This leads to the notion of a well-posed problem    A well-posed problem is a PDE, a domain , and auxiliary conditions so that   Existence: there exists at least one solution satisfiying the PDE and constraints;    Uniqueness: there exists at most one solution satisfying the PDE and constraints;    Stability: small changes in the constraints should lead to small changes in the corresponding solutions.       We should note that many interesting problems do not exhibit stability (see, for example, the double pendulum).  What sorts of constraints can we impose?   An intitial condition specifies the behavior of the unknown function at some specific time . The number of such conditions necessary to produce a well-posed problem typically is equal to the number of time derivatives in the problem. In a mass-spring system ODE, for example, we frequently specifiy the initial position and velocity. For the PDE , we would need to specify positions and velocities .    Given a domain with boundary , a Dirichlet condition specifies the unknown function on the boundary. That is, for all . A typical example is a vibrating string of fixed length, for which the wave equation has Dirichlet condition where is the length of the string.    A Neumann boundary condition specifies the normal derivative on the boundary (that is, the projection of the gradient onto the the normal vectors on , so that ). Neumann conditions are often seen when problems under consideration are insulated - that is, the boundary is impermeable.    A Robin boundary condition is a linear combination of Dirichlet and Neumann boundary conditions - that is, we specify for some fixed functions .       Classifying second order PDE  Consider the general second order constant coefficient homogeneous PDE given by Because of the similarity of this equation to the classical conic sections in the plane, we can use a similar techinque to classify these equations. Notice that the coefficients of the second order derivatives form a symmetric matrix It turns out that the determinant of this matrix classifies the PDE, in the same way that the determinant of the visually related Hessian matrix in multivariate calculus was the key object in the second derivative test for local extrema.    Every second order linear constant coefficient homogeneous PDE can be reduced to one of three canonical forms.   If , then the PDE is called elliptic, and can be reduced to the form     If , then the PDE is called hyperbolic, and can be reduced to the form     If , then the PDE is called parabolic, and can be reduced to the form        Essentially, this says that every linear constant coefficient second order homoegenous PDE can be reduced to (up to lower order terms), Laplace's equation, the wave equation, or the diffusion equation. Let's look at an example of how to do the transformation to canonical form.   Put into canonical form and classify the equation. First note that the coefficient matrix is orthogonally diagonalizable as the matrix is real and symmetric. In fact, Introduce new variables by , which gives By the chain rule, Under this substitution, the original equation becomes which is hyperbolic. Note that we could have read this information directly from the eigenvalues of the matrix - as they have opposite sign, the PDE is hyperbolic.    "
},
{
  "id": "def-well-posed",
  "level": "2",
  "url": "sec-lecture-4.html#def-well-posed",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  A well-posed problem is a PDE, a domain , and auxiliary conditions so that   Existence: there exists at least one solution satisfiying the PDE and constraints;    Uniqueness: there exists at most one solution satisfying the PDE and constraints;    Stability: small changes in the constraints should lead to small changes in the corresponding solutions.      "
},
{
  "id": "thm-classification",
  "level": "2",
  "url": "sec-lecture-4.html#thm-classification",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "",
  "body": "  Every second order linear constant coefficient homogeneous PDE can be reduced to one of three canonical forms.   If , then the PDE is called elliptic, and can be reduced to the form     If , then the PDE is called hyperbolic, and can be reduced to the form     If , then the PDE is called parabolic, and can be reduced to the form       "
},
{
  "id": "subsec-classifying-second-order-pde-5",
  "level": "2",
  "url": "sec-lecture-4.html#subsec-classifying-second-order-pde-5",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": " Put into canonical form and classify the equation. First note that the coefficient matrix is orthogonally diagonalizable as the matrix is real and symmetric. In fact, Introduce new variables by , which gives By the chain rule, Under this substitution, the original equation becomes which is hyperbolic. Note that we could have read this information directly from the eigenvalues of the matrix - as they have opposite sign, the PDE is hyperbolic.  "
},
{
  "id": "sec-lecture-5",
  "level": "1",
  "url": "sec-lecture-5.html",
  "type": "Section",
  "number": "1.5",
  "title": "Lecture 5 - Wave equation on the line",
  "body": " Lecture 5 - Wave equation on the line   In this section, we'll solve the wave equation in the general case. We start here because the operator that defines the wave equation has very nice algebraic properties.    Solution by factoring the operator  Consider the equation where . Writing this in operator form, we have which factors as There are two ways that this equation can hold for a function . The first is that . Solving note that must be constant on lines parallel to the vector , which means is constant along lines of the form for constants . As we've seen in earlier sections, this mean that such functions must take the form for some arbitrary function .  The other possibility is that for some non-zero function in which case we need to solve the equation Following the same idea as before, we conclude that for some arbitrary function . Of course, we aren't done, as we seek solutions . That is, we must now solve the equation which is equivalent to Note that if where , then and hence solves . Then the general solution to the differential equation is of the form of a linear combination of our two arbitrary solutions:   Right away, we can interpret what this means. The solutions to the wave equation on the line correspond to functions traveling in opposite directions on the line as time tends from to . A Desmos workbook with some demonstration solutions can be found here.    "
},
{
  "id": "sec-lecture-6",
  "level": "1",
  "url": "sec-lecture-6.html",
  "type": "Section",
  "number": "2.1",
  "title": "Lecture 6 - Diffusion",
  "body": " Lecture 6 - Diffusion  To be added.  "
},
{
  "id": "sec-lecture-7",
  "level": "1",
  "url": "sec-lecture-7.html",
  "type": "Section",
  "number": "2.2",
  "title": "Lecture 7 - Energy method",
  "body": " Lecture 7 - Energy method  To be added.  "
},
{
  "id": "sec-lecture-8",
  "level": "1",
  "url": "sec-lecture-8.html",
  "type": "Section",
  "number": "2.3",
  "title": "Lecture 8 - Diffusion on the half line",
  "body": " Lecture 8 - Diffusion on the half line  To be added.  "
},
{
  "id": "sec-lecture-9",
  "level": "1",
  "url": "sec-lecture-9.html",
  "type": "Section",
  "number": "2.4",
  "title": "Lecture 9 - Separation of variables",
  "body": " Lecture 9 - Separation of variables   Recall that the general solution to the ODE can be written in the form   We're going to apply that idea to certain type of PDE by a method called separation of variables .    Dirichlet conditions  Consider the Dirichlet problem   Let us make the (strikingly strong) assumption that a solution takes the form ; that is, the function is independently responsive to and . The reason to do so is immediately apparent on calculating derivatives. Plugging into the PDE then gives Dividing through (and introducing a convenient negative sign) gives for some constant . The justification for these expressions being equal to some mutual constant comes from either taking partial derivatives with respect to or from observing that these expressions are equal for all values of the independent variables , which can only happen if they are constant. This gives rise to two separated equations.   The solutions to the two equations will depend on the sign of the constant . For the moment, let us consider the case where so that we can write for some positive constant . In this case, the solutions to the equations are We now apply the initial conditions to get more information about the form of the solutions. Since for all , it must be that . Hence, . Likewise, gives Since gives the trivial solution in , it must be that . Then the possible values of are for any positive integer . That is, each gives a distinct and hence a distinct solution to the differential equation. Let us then say and . Consequently, is a solution to and the corresponding solution to is So for each , is asolution to the boundary value problem. As the PDE is linear, the principle of superposition tells us that is also a solution.  What about the other possibilties for ? If , then we are solving the problem which has solution for constants . Since , this require that . Since , this requires that and hence that the only solution is the trivial solution . Hence, . What if ? Then write for some positive constant . Then the equation we are trying to solve is which has solutions of the form The initial conditions require that which means that . On the other hand, which requires that . Hence is again the only soluition to the equation, and hence is not negative. Then solutions corresponding to the possible positive values of describe the entire solution space under the assumption that the solution is separated .  Suppose that we had started the boundary value problem with an initial condition . Applying the initial condition our solution would say that the IVP was solvable with solution precisely when and Fourier's insight was that these observations should also hold if (which should at least be plausible if we could construct some sequences so that the series all converge), but then we are faced with the following (rather difficult) question: for which functions does it hold that one can find a sequence so that ? This is the central question that will lead us into the study of Fourier series.  A similar analysis on the problem leads to the solution provided that a sequence exists so that That is, the same requirement about the nature of holds.    Eigenvalues and Eigenfunction.  We can view the process we used above as linear algebraic in nature. If we rewrite the equation in the form we should be reminded of the eigenvalue\/eigenvector equation where is an eigenvalue and is an eigenvector. Certainly is a linear operator, and so we use the same terminology here: if is a function and is a number so that , we say that is an eigenfunction of and that is the corresponding eigenvalue. When we impose boundary conditions, we restrict the possible eigenvalue\/eigenfunction pairs for the operator . A shorthand description of the process that we took above might be that we assumed , solved for the possible forms of the eigenfunctions, and then worked backwards to find the possible eigenvalues. We then asserted that the subspace of solutions spanned by the product of eigenfunctions in and solves an initial value problem if the initial condition is in the span of the eigenfunctions in . For example, in the last subsection, given the wave equation with Dirichlet boundary conditions, we found that the equation has eigenvalues with corresponding eigenfunctions .    Neumann conditions  Let us consider the case where the initial conditions are Neumann- that is, we describe the normal derivative at the boundary. In particular, let us look at the diffusion equation given by which corresponds to a heated rod of finite length with insulated ends. As before, let us assume that is a separated solution. This leads to the system of equations Regardless of the sign of , we have the solution . As before, we'll use the equation in and the boundary conditions to extract more information about the nature of the solutions.  As before, start with the assumption that so that our solutions have the form and so Now we are in position to apply our boundary conditions, which imply that . First, so . Since we must have that for some integer . Then the eigenvalues of the problem are and the corresponding eigenfunctions are .   "
},
{
  "id": "sec-lecture-10",
  "level": "1",
  "url": "sec-lecture-10.html",
  "type": "Section",
  "number": "2.5",
  "title": "Lecture 10 - Fourier stuff",
  "body": " Lecture 10 - Fourier stuff  In progress.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
