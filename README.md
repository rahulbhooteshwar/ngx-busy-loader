
<h1 align="center">ngx-busy-loader</h1>


<p align="center">
Configurable spinner component library for <a href="https://angular.io/">Angular</a> apps
<p>

#

Hello, Devs!

**ngx-busy-loader** is a component library to fulfill all
your need of various types of busy load indicators in your application.

Go ahead and use our collection of some amazingly cool loaders.

<h1 align="center" style="color:orange">
    <a href="https://rahulbhooteshwar.github.io/ngx-busy-loader/">
        See the Demo Here
    </a>
</h1>



## Links
- [Documentation](https://github.com/rahulbhooteshwar/ngx-busy-loader#readme)

- [Release Notes](https://github.com/rahulbhooteshwar/ngx-busy-loader/blob/master/CHANGELOG.md)

## **Getting Started**
### **ngx-busy-loader** contains various types of spinner that can be used with a number of configurable options like size, color, overlay and overlayColor

## **Installation Instructions**

Install `ngx-busy-loader` from `npm`
```bash
npm install ngx-busy-loader --save
```
You will not need anything other than this 

# Usage

##### **In your App Module**
##### 
```bash
import { SpinnerModule } from 'ngx-busy-loader';

@NgModule({  
    ....  
    imports: [SpinnerModule,.....],  
    .....  
})
```

##### **Use one of the following components as shown:**
#####

```bash
<ngx-spinner-circle-gradient></ngx-spinner-circle-gradient>
```
```bash
<ngx-spinner-circle-gradient-slow></ngx-spinner-circle-gradient-slow>
```
```bash
<ngx-spinner-circle-solid></ngx-spinner-circle-solid>
```
```bash
<ngx-spinner-circle-dotted-gradient></ngx-spinner-circle-dotted-gradient>
```
```bash
<ngx-spinner-circle-dotted-gradient-slow></ngx-spinner-circle-dotted-gradient-slow>
```
```bash
<ngx-spinner-single-dotted-line></ngx-spinner-single-dotted-line>
```
```bash
<ngx-spinner-lines-vertical></ngx-spinner-lines-vertical>  
```

##### **&gt; Options**

**You can pass input
properties for customization, as shown below:**

```bash
<ngx-spinner-lines-vertical
[color]="'some_color_or_hash'"
[size]="'some_size_from_available_ones'"></ngx-spinner-lines-vertical>
```

**Available Sizes**: xl, lg, md, sm, xs

You can pass dynamic values as input binding as well.

**Full Page Overlay**: 

You can also use any of the busy load indicators as full page overlay indicator. This is useful when required to disable any user acttion while waiting for  any process to complete.

***_Using as overlay spinner_***

```bash
<ngx-spinner-lines-vertical
[overlay]="true"
[color]="'some_color_or_hash'"
[size]="'some_size'"></ngx-spinner-lines-vertical>
```

Optionally, you can pass overlay color for background:

```bash
<ngx-spinner-lines-vertical
[overlay]="true"
[overlayColor]="'#24292e08'"
[color]="'some_color_or_hash'"
[size]="'some_size'"></ngx-spinner-lines-vertical>
```

Try to use some transparent overlay color for better user experience.


# Browser Support
`ngx-busy-loader` is well verified on all modern browsers using Browser Stack. Using browserstack we make sure cross browser compatibility of the module, so that it works seamlessly on all supported browsers. Browserstack has helped us in identifying issues at very early stage.

[![Browser Stack](https://bstacksupport.zendesk.com/attachments/token/PzdqcKEmprO9zGDgG7ASHgcqi/?name=browserstack-logo-600x315.png)](http://browserstack.com/) 
