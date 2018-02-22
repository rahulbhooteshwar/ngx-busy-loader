# ngx-busy-loader

Hello, Devs!

**ngx-busy-loader** is a component library to fulfill all
your need of various types of busy load indicators in your application.

Go ahead and use our collection of some amazingly cool loaders.

# [See the Demo Here](https://rahulbhooteshwar.github.io/ngx-busy-loader/)

##### **Getting Started**

#### **&gt; Installation**

Run command: npm install --save **_ngx-busy-loader_**

#### **&gt; Usage**

##### **In your App Module**
##### 

import { SpinnerModule } from
'./modules/spinner/spinner.module';

@NgModule({  
    ....  
    imports: [SpinnerModule,.....],  
    .....  
})

##### **Use one of the following components according to your need:**

**&lt;ngx-spinner-circle-gradient&gt;&lt;/ngx-spinner-circle-gradient&gt;**

**&lt;ngx-spinner-circle-gradient-slow&gt;&lt;/ngx-spinner-circle-gradient-slow&gt;**

**&lt;ngx-spinner-circle-solid&gt;&lt;/ngx-spinner-circle-solid&gt;**

**&lt;ngx-spinner-circle-dotted-gradient&gt;&lt;/ngx-spinner-circle-dotted-gradient&gt;**

**&lt;ngx-spinner-circle-dotted-gradient-slow&gt;&lt;/ngx-spinner-circle-dotted-gradient-slow&gt;**

**&lt;ngx-spinner-single-dotted-line&gt;&lt;/ngx-spinner-single-dotted-line&gt;**

**&lt;ngx-spinner-lines-vertical&gt;&lt;/ngx-spinner-lines-vertical&gt;**  

#####   

#### **&gt; Options**

**You can pass input
properties for customization, as shown below:**

**&lt;ngx-spinner-lines-vertical
[color]="'some_color_or_hash'"
[size]="'some_size_from_available_ones'"&gt;&lt;/ngx-spinner-lines-vertical&gt;**

        **Available sizes**: xl, lg, md, sm, xs

        You can pass
dynamic values as input binding as well.
