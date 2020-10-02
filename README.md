### ⚡ Static Site Generation - Next.js

**A basic application to practice Static Server Generation (SSG) concept, based on Next.js.**
**SSG is a means of generating static pages on your website, searching for API data, in order to make loading pages faster. Uses Next.js properties, such as "static props" and "static paths", the generation becomes easy and dynamic, being done at build time of the site on server side and can be facilitated with the use of features such as "fallback "and" revalidate ", present in the latest versions of Next.js.**

> Read the [article I wrote](https://medium.com/@theigorlourenco/um-resumo-sobre-static-site-generation-ssg-no-next-js-a7d6880c6c6a) about Server Site Generation.

**_Fallback_: is an attribute passed as return of the "standard" function getStaticPaths, which serves to "fill" the space left when a page was not generated, usually because the property sought was not returned by the API, due to pagination or other anything that can happen. Implemented in the "main component", the "isFallback" shows a filling page for the user while the API redoes the search for the data requested by the client.**

**_Revalidade_: so as not to need to build the site whenever the page data is updated on the server side (fetched by the API), the _revalidate_ property serves as a repeat of the "time in time" search (the property value is passed in seconds ). Therefore, if the parameter passed in the return of the function "getStaticProps" is "_revalidate: 10_", the query to the API will be repeated every 10 seconds and, thus, the data are updated constantly at the same time that, on the client, the page will not be "rebuilt" for each request, only at the first of the interval (in the example given it is 10 seconds).**

---

##### Used technologies:

* [TypeScript](https://www.typescriptlang.org/): programming language used in the project. Extends JavaScript and adds types to variables;
* [ReactJS](https://pt-br.reactjs.org/): JavaScript library used to build web applications;
* [Next.js](http://nextjs.org/): it is a framework from [ReactJS](https://pt-br.reactjs.org/) that I use to build my projects;

---

##### Practiced concepts:
* Static Site Generation (SSG).

---

Made With ❤️ & TypeScript by Igor Lourenço
