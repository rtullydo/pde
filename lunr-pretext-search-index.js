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
  "body": " Lecture 2  First Order Linear Equations  Consider the equation where are constants, not both zero. We'll being by looking at two initial methods for solving this equation. First, we'll introduce what is sometimes called the method of characteristics . We want to find curves in on which the PDE acts like an ODE (which will allow us to use basic ODE techniques in the solution). First, observe that the directional derivative of in the direction . Where is such a constant? The value of is constant when the directional derivative is zero, which happens on any line parallel to , all of which have the form for constants . (These are called the characteristic lines .) But then the value of at only depends on which particular line happens to fall on, which is to say only depends on the value . Another way to state this is that the solution to must have the form where is any differentiable function of one variable. For example, we can show that when , the function is a solution. and so    "
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
