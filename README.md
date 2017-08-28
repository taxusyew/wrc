# WRC(Wallet React Component)

## Component
- actionsheet
- button
- checkbox
- cinput
- dialog
- loading
- mask
- passwd
- plainbutton
- plaindialog
- plaintoast
- tabs
- tappable
- timer
- toast
- triplelistitem

## How to use

### Button
```
import Button from 'wrc/lib/button';

<Button>My Button</Button>

```

### Passwd
```
import Passwd from 'wrc/lib/passwd';

<Passwd length={6}></Passwd>

```

### Dialog
```
import Dialog from 'wrc/lib/dialog';

<Dialog
    show={this.state.showDialog} 
    title="Title"
    className="bc-dialog"
    footer={[
        { label: 'Cancel', onClick: ()=>{this.setState({showDialog: false})} },
        { label: 'Confirm', onClick: ()=>{this.setState({showDialog: false})} }
    ]}>
    <span>This is the dialog content.</span>
</Dialog>
```

### Dialog
```
import PlainDialog from 'wrc/lib/plaindialog';

<PlainDialog
    show={this.state.showPlainDialog}
>
    <h1>There is no style!</h1>
    <Button onClick={()=>{this.setState({showPlainDialog: false})}}>Click me!</Button>
</PlainDialog>

```

### Tappable
```
import Tappable from 'wrc/lib/tappable';

<Tappable></Tappable>

```

### Tabs, Tab
```
import {Tabs, Tab} from 'wrc/lib/tabs';

<Tabs index={this.state.tabIndex} onClick={(idx)=>{this.setState({tabIndex: idx})}} >
    <Tab key={0} label="Card" className={this.state.tabIndex == 0 ? 'active' : ''}>
        <Tappable
            onClick={()=>{}}
            className="pwd-bank-item pwd-bank-item">

             <TripleListitem>
                 <TripleListitem.left>
                     
                 </TripleListitem.left>
                 <TripleListitem.center>
                     <div>Card</div>
                 </TripleListitem.center>
             </TripleListitem>
        </Tappable>
    </Tab>
    <Tab key={1} label="Bank" className={this.state.tabIndex == 1 ? 'active' : ''}>
        <Tappable
            onClick={()=>{}}
            className="pwd-bank-item pwd-bank-item">

             <TripleListitem>
                 <TripleListitem.left>
                     
                 </TripleListitem.left>
                 <TripleListitem.center>
                     <div>Bank</div>
                 </TripleListitem.center>
             </TripleListitem>
        </Tappable>
    </Tab>
</Tabs>

```

### TripleListitem
```
import TripleListitem from 'wrc/lib/triplelistitem';

<TripleListitem>
    <TripleListitem.left> </TripleListitem.left>
    <TripleListitem.center> </TripleListitem.center>
    <TripleListitem.right> </TripleListitem.right>
</TripleListitem>

```


## License
MIT © taxusyew