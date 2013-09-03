declare module "uglify-js" {
    /*
     * Uglify AST declarations
     */

    interface iAST_Token {
        type ?: any;
        value ?: any;
        line ?: any;
        col ?: any;
        pos ?: any;
        endpos ?: any;
        nlb ?: any;
        comments_before ?: any;
        file ?: any;
    }
    class AST_Token {
        constructor (data ?: iAST_Token);
        type : any;
        value : any;
        line : any;
        col : any;
        pos : any;
        endpos : any;
        nlb : any;
        comments_before : any;
        file : any;
    }

    interface iAST_Node {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Node {
        constructor (data ?: iAST_Node);
        start : AST_Token;
        end : AST_Token;
        walk(walker: TreeWalker) : void;
        print(output: OutputStream) : void;
    }

    interface iAST_Statement {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Statement extends AST_Node {
        constructor (data ?: iAST_Statement);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Debugger {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Debugger extends AST_Statement {
        constructor (data ?: iAST_Debugger);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Directive {
        value ?: string;
        scope ?: AST_Scope;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Directive extends AST_Statement {
        constructor (data ?: iAST_Directive);
        value : string;
        scope : AST_Scope;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SimpleStatement {
        body ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SimpleStatement extends AST_Statement {
        constructor (data ?: iAST_SimpleStatement);
        body : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Block {
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Block extends AST_Statement {
        constructor (data ?: iAST_Block);
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_BlockStatement {
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_BlockStatement extends AST_Block {
        constructor (data ?: iAST_BlockStatement);
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_EmptyStatement {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_EmptyStatement extends AST_Statement {
        constructor (data ?: iAST_EmptyStatement);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_StatementWithBody {
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_StatementWithBody extends AST_Statement {
        constructor (data ?: iAST_StatementWithBody);
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_LabeledStatement {
        label ?: AST_Label;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_LabeledStatement extends AST_StatementWithBody {
        constructor (data ?: iAST_LabeledStatement);
        label : AST_Label;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_IterationStatement {
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_IterationStatement extends AST_StatementWithBody {
        constructor (data ?: iAST_IterationStatement);
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_DWLoop {
        condition ?: AST_Node;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_DWLoop extends AST_IterationStatement {
        constructor (data ?: iAST_DWLoop);
        condition : AST_Node;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Do {
        condition ?: AST_Node;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Do extends AST_DWLoop {
        constructor (data ?: iAST_Do);
        condition : AST_Node;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_While {
        condition ?: AST_Node;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_While extends AST_DWLoop {
        constructor (data ?: iAST_While);
        condition : AST_Node;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_For {
        init ?: AST_Node;
        condition ?: AST_Node;
        step ?: AST_Node;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_For extends AST_IterationStatement {
        constructor (data ?: iAST_For);
        init : AST_Node;
        condition : AST_Node;
        step : AST_Node;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_ForIn {
        init ?: AST_Node;
        name ?: AST_SymbolRef;
        object ?: AST_Node;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_ForIn extends AST_IterationStatement {
        constructor (data ?: iAST_ForIn);
        init : AST_Node;
        name : AST_SymbolRef;
        object : AST_Node;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_With {
        expression ?: AST_Node;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_With extends AST_StatementWithBody {
        constructor (data ?: iAST_With);
        expression : AST_Node;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Scope {
        directives ?: string[];
        variables ?: Object;
        functions ?: Object;
        uses_with ?: boolean;
        uses_eval ?: boolean;
        parent_scope ?: AST_Scope;
        enclosed ?: SymbolDef[];
        cname ?: number;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Scope extends AST_Block {
        constructor (data ?: iAST_Scope);
        directives : string[];
        variables : Object;
        functions : Object;
        uses_with : boolean;
        uses_eval : boolean;
        parent_scope : AST_Scope;
        enclosed : SymbolDef[];
        cname : number;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Toplevel {
        globals ?: Object;
        directives ?: string[];
        variables ?: Object;
        functions ?: Object;
        uses_with ?: boolean;
        uses_eval ?: boolean;
        parent_scope ?: AST_Scope;
        enclosed ?: SymbolDef[];
        cname ?: number;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Toplevel extends AST_Scope {
        constructor (data ?: iAST_Toplevel);
        globals : Object;
        directives : string[];
        variables : Object;
        functions : Object;
        uses_with : boolean;
        uses_eval : boolean;
        parent_scope : AST_Scope;
        enclosed : SymbolDef[];
        cname : number;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Lambda {
        name ?: AST_SymbolDeclaration;
        argnames ?: AST_SymbolFunarg[];
        uses_arguments ?: boolean;
        directives ?: string[];
        variables ?: Object;
        functions ?: Object;
        uses_with ?: boolean;
        uses_eval ?: boolean;
        parent_scope ?: AST_Scope;
        enclosed ?: SymbolDef[];
        cname ?: number;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Lambda extends AST_Scope {
        constructor (data ?: iAST_Lambda);
        name : AST_SymbolDeclaration;
        argnames : AST_SymbolFunarg[];
        uses_arguments : boolean;
        directives : string[];
        variables : Object;
        functions : Object;
        uses_with : boolean;
        uses_eval : boolean;
        parent_scope : AST_Scope;
        enclosed : SymbolDef[];
        cname : number;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Accessor {
        name ?: AST_SymbolDeclaration;
        argnames ?: AST_SymbolFunarg[];
        uses_arguments ?: boolean;
        directives ?: string[];
        variables ?: Object;
        functions ?: Object;
        uses_with ?: boolean;
        uses_eval ?: boolean;
        parent_scope ?: AST_Scope;
        enclosed ?: SymbolDef[];
        cname ?: number;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Accessor extends AST_Lambda {
        constructor (data ?: iAST_Accessor);
        name : AST_SymbolDeclaration;
        argnames : AST_SymbolFunarg[];
        uses_arguments : boolean;
        directives : string[];
        variables : Object;
        functions : Object;
        uses_with : boolean;
        uses_eval : boolean;
        parent_scope : AST_Scope;
        enclosed : SymbolDef[];
        cname : number;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Function {
        name ?: AST_SymbolDeclaration;
        argnames ?: AST_SymbolFunarg[];
        uses_arguments ?: boolean;
        directives ?: string[];
        variables ?: Object;
        functions ?: Object;
        uses_with ?: boolean;
        uses_eval ?: boolean;
        parent_scope ?: AST_Scope;
        enclosed ?: SymbolDef[];
        cname ?: number;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Function extends AST_Lambda {
        constructor (data ?: iAST_Function);
        name : AST_SymbolDeclaration;
        argnames : AST_SymbolFunarg[];
        uses_arguments : boolean;
        directives : string[];
        variables : Object;
        functions : Object;
        uses_with : boolean;
        uses_eval : boolean;
        parent_scope : AST_Scope;
        enclosed : SymbolDef[];
        cname : number;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Defun {
        name ?: AST_SymbolDeclaration;
        argnames ?: AST_SymbolFunarg[];
        uses_arguments ?: boolean;
        directives ?: string[];
        variables ?: Object;
        functions ?: Object;
        uses_with ?: boolean;
        uses_eval ?: boolean;
        parent_scope ?: AST_Scope;
        enclosed ?: SymbolDef[];
        cname ?: number;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Defun extends AST_Lambda {
        constructor (data ?: iAST_Defun);
        name : AST_SymbolDeclaration;
        argnames : AST_SymbolFunarg[];
        uses_arguments : boolean;
        directives : string[];
        variables : Object;
        functions : Object;
        uses_with : boolean;
        uses_eval : boolean;
        parent_scope : AST_Scope;
        enclosed : SymbolDef[];
        cname : number;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Jump {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Jump extends AST_Statement {
        constructor (data ?: iAST_Jump);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Exit {
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Exit extends AST_Jump {
        constructor (data ?: iAST_Exit);
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Return {
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Return extends AST_Exit {
        constructor (data ?: iAST_Return);
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Throw {
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Throw extends AST_Exit {
        constructor (data ?: iAST_Throw);
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_LoopControl {
        label ?: AST_LabelRef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_LoopControl extends AST_Jump {
        constructor (data ?: iAST_LoopControl);
        label : AST_LabelRef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Break {
        label ?: AST_LabelRef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Break extends AST_LoopControl {
        constructor (data ?: iAST_Break);
        label : AST_LabelRef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Continue {
        label ?: AST_LabelRef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Continue extends AST_LoopControl {
        constructor (data ?: iAST_Continue);
        label : AST_LabelRef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_If {
        condition ?: AST_Node;
        alternative ?: AST_Statement;
        body ?: AST_Statement;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_If extends AST_StatementWithBody {
        constructor (data ?: iAST_If);
        condition : AST_Node;
        alternative : AST_Statement;
        body : AST_Statement;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Switch {
        expression ?: AST_Node;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Switch extends AST_Block {
        constructor (data ?: iAST_Switch);
        expression : AST_Node;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SwitchBranch {
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SwitchBranch extends AST_Block {
        constructor (data ?: iAST_SwitchBranch);
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Default {
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Default extends AST_SwitchBranch {
        constructor (data ?: iAST_Default);
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Case {
        expression ?: AST_Node;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Case extends AST_SwitchBranch {
        constructor (data ?: iAST_Case);
        expression : AST_Node;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Try {
        bcatch ?: AST_Catch;
        bfinally ?: AST_Finally;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Try extends AST_Block {
        constructor (data ?: iAST_Try);
        bcatch : AST_Catch;
        bfinally : AST_Finally;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Catch {
        argname ?: AST_SymbolCatch;
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Catch extends AST_Block {
        constructor (data ?: iAST_Catch);
        argname : AST_SymbolCatch;
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Finally {
        body ?: AST_Statement[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Finally extends AST_Block {
        constructor (data ?: iAST_Finally);
        body : AST_Statement[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Definitions {
        definitions ?: AST_VarDef[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Definitions extends AST_Statement {
        constructor (data ?: iAST_Definitions);
        definitions : AST_VarDef[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Var {
        definitions ?: AST_VarDef[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Var extends AST_Definitions {
        constructor (data ?: iAST_Var);
        definitions : AST_VarDef[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Const {
        definitions ?: AST_VarDef[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Const extends AST_Definitions {
        constructor (data ?: iAST_Const);
        definitions : AST_VarDef[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_VarDef {
        name ?: any;
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_VarDef extends AST_Node {
        constructor (data ?: iAST_VarDef);
        name : any;
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Call {
        expression ?: AST_Node;
        args ?: AST_Node[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Call extends AST_Node {
        constructor (data ?: iAST_Call);
        expression : AST_Node;
        args : AST_Node[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_New {
        expression ?: AST_Node;
        args ?: AST_Node[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_New extends AST_Call {
        constructor (data ?: iAST_New);
        expression : AST_Node;
        args : AST_Node[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Seq {
        car ?: AST_Node;
        cdr ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Seq extends AST_Node {
        constructor (data ?: iAST_Seq);
        car : AST_Node;
        cdr : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_PropAccess {
        expression ?: AST_Node;
        property ?: any;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_PropAccess extends AST_Node {
        constructor (data ?: iAST_PropAccess);
        expression : AST_Node;
        property : any;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Dot {
        expression ?: AST_Node;
        property ?: any;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Dot extends AST_PropAccess {
        constructor (data ?: iAST_Dot);
        expression : AST_Node;
        property : any;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Sub {
        expression ?: AST_Node;
        property ?: any;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Sub extends AST_PropAccess {
        constructor (data ?: iAST_Sub);
        expression : AST_Node;
        property : any;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Unary {
        operator ?: string;
        expression ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Unary extends AST_Node {
        constructor (data ?: iAST_Unary);
        operator : string;
        expression : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_UnaryPrefix {
        operator ?: string;
        expression ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_UnaryPrefix extends AST_Unary {
        constructor (data ?: iAST_UnaryPrefix);
        operator : string;
        expression : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_UnaryPostfix {
        operator ?: string;
        expression ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_UnaryPostfix extends AST_Unary {
        constructor (data ?: iAST_UnaryPostfix);
        operator : string;
        expression : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Binary {
        left ?: AST_Node;
        operator ?: string;
        right ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Binary extends AST_Node {
        constructor (data ?: iAST_Binary);
        left : AST_Node;
        operator : string;
        right : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Conditional {
        condition ?: AST_Node;
        consequent ?: AST_Node;
        alternative ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Conditional extends AST_Node {
        constructor (data ?: iAST_Conditional);
        condition : AST_Node;
        consequent : AST_Node;
        alternative : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Assign {
        left ?: AST_Node;
        operator ?: string;
        right ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Assign extends AST_Binary {
        constructor (data ?: iAST_Assign);
        left : AST_Node;
        operator : string;
        right : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Array {
        elements ?: AST_Node[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Array extends AST_Node {
        constructor (data ?: iAST_Array);
        elements : AST_Node[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Object {
        properties ?: AST_ObjectProperty[];
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Object extends AST_Node {
        constructor (data ?: iAST_Object);
        properties : AST_ObjectProperty[];
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_ObjectProperty {
        key ?: string;
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_ObjectProperty extends AST_Node {
        constructor (data ?: iAST_ObjectProperty);
        key : string;
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_ObjectKeyVal {
        key ?: string;
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_ObjectKeyVal extends AST_ObjectProperty {
        constructor (data ?: iAST_ObjectKeyVal);
        key : string;
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_ObjectSetter {
        key ?: string;
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_ObjectSetter extends AST_ObjectProperty {
        constructor (data ?: iAST_ObjectSetter);
        key : string;
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_ObjectGetter {
        key ?: string;
        value ?: AST_Node;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_ObjectGetter extends AST_ObjectProperty {
        constructor (data ?: iAST_ObjectGetter);
        key : string;
        value : AST_Node;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Symbol {
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Symbol extends AST_Node {
        constructor (data ?: iAST_Symbol);
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }
    class SymbolDef extends AST_Symbol {} // XXX: uglify kludge

    interface iAST_SymbolAccessor {
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolAccessor extends AST_Symbol {
        constructor (data ?: iAST_SymbolAccessor);
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolDeclaration {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolDeclaration extends AST_Symbol {
        constructor (data ?: iAST_SymbolDeclaration);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolVar {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolVar extends AST_SymbolDeclaration {
        constructor (data ?: iAST_SymbolVar);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolConst {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolConst extends AST_SymbolDeclaration {
        constructor (data ?: iAST_SymbolConst);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolFunarg {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolFunarg extends AST_SymbolVar {
        constructor (data ?: iAST_SymbolFunarg);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolDefun {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolDefun extends AST_SymbolDeclaration {
        constructor (data ?: iAST_SymbolDefun);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolLambda {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolLambda extends AST_SymbolDeclaration {
        constructor (data ?: iAST_SymbolLambda);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolCatch {
        init ?: AST_Node[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolCatch extends AST_SymbolDeclaration {
        constructor (data ?: iAST_SymbolCatch);
        init : AST_Node[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Label {
        references ?: AST_LoopControl[];
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Label extends AST_Symbol {
        constructor (data ?: iAST_Label);
        references : AST_LoopControl[];
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_SymbolRef {
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_SymbolRef extends AST_Symbol {
        constructor (data ?: iAST_SymbolRef);
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_LabelRef {
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_LabelRef extends AST_Symbol {
        constructor (data ?: iAST_LabelRef);
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_This {
        scope ?: AST_Scope;
        name ?: string;
        thedef ?: SymbolDef;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_This extends AST_Symbol {
        constructor (data ?: iAST_This);
        scope : AST_Scope;
        name : string;
        thedef : SymbolDef;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Constant {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Constant extends AST_Node {
        constructor (data ?: iAST_Constant);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_String {
        value ?: string;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_String extends AST_Constant {
        constructor (data ?: iAST_String);
        value : string;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Number {
        value ?: number;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Number extends AST_Constant {
        constructor (data ?: iAST_Number);
        value : number;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_RegExp {
        value ?: RegExp;
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_RegExp extends AST_Constant {
        constructor (data ?: iAST_RegExp);
        value : RegExp;
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Atom {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Atom extends AST_Constant {
        constructor (data ?: iAST_Atom);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Null {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Null extends AST_Atom {
        constructor (data ?: iAST_Null);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_NaN {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_NaN extends AST_Atom {
        constructor (data ?: iAST_NaN);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Undefined {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Undefined extends AST_Atom {
        constructor (data ?: iAST_Undefined);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Hole {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Hole extends AST_Atom {
        constructor (data ?: iAST_Hole);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Infinity {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Infinity extends AST_Atom {
        constructor (data ?: iAST_Infinity);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_Boolean {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_Boolean extends AST_Atom {
        constructor (data ?: iAST_Boolean);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_False {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_False extends AST_Boolean {
        constructor (data ?: iAST_False);
        start : AST_Token;
        end : AST_Token;
    }

    interface iAST_True {
        start ?: AST_Token;
        end ?: AST_Token;
    }
    class AST_True extends AST_Boolean {
        constructor (data ?: iAST_True);
        start : AST_Token;
        end : AST_Token;
    }

    /*
     * End AST declarations
     */

    class TreeWalker {
        constructor (visitor: (node: AST_Node) => any);
    }

    interface ParseOptions {
        strict   ?: boolean;       // default is false
        filename ?: string;        // default is null
        toplevel ?: AST_Toplevel;  // also null
    }
    function parse(code: string, options?: ParseOptions): AST_Toplevel;

    interface OutputStreamOptions {
        indent_start  ?: number;  // start indentation on every line (only when `beautify`)
        indent_level  ?: number;  // indentation level (only when `beautify`)
        quote_keys    ?: boolean; // quote all keys in object literals?
        space_colon   ?: boolean; // add a space after colon signs?
        ascii_only    ?: boolean; // output ASCII-safe? (encodes Unicode characters as ASCII)
        inline_script ?: boolean; // escape "</script"?
        width         ?: number;  // informative maximum line width (for beautified output)
        max_line_len  ?: number;  // maximum line length (for non-beautified output)
        ie_proof      ?: boolean; // output IE-safe code?
        beautify      ?: boolean; // beautify output?
        source_map    ?: any;     // output a source map
        bracketize    ?: boolean; // use brackets every time?
        comments      ?: boolean; // output comments?
        semicolons    ?: boolean; // use semicolons to separate statements? (otherwise, newlines)
    }
    interface OutputStream {}
    function OutputStream(options: OutputStreamOptions): OutputStream;
}
