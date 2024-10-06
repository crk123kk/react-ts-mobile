# useState 自动推导

    React 会更具传入 useState 的默认值来自动推导类型，不需要显示标注类型

# useState 泛型

    type User = {
        name: string;
        age: number;
    }
    const [user, setUser] = useState<User>()

# props 的类型声明

# children

# 函数

    可选链 ？. ：前面不为空（null\undefined）才会执行后面的方法

                类型守卫，防止出现空值点运算错误


        在方法中也是可以使用的

            type Props = {
                onGetMsg?: (msg: string) => void
            }

            function Son(props: Props) {
                const {onGetMsg } = props
                const clickHandler = () => {
                    onGetMsg?.('this is msg')
                }
            }

# useRef

    const domRef = useRef<HTMLDivElement>()

# 路径别名

    vite 配置

        alias: {
            "@": path.resolve(__dirname, "./src"),
        },

# detail

      // 没有数据的时候，返回一个loading的状态

        if (!detail) {
        return <div>this is loading....</div>;
        }

        // 数据返回之后，正式渲染的内容，这样可以避免数据未返回导致渲染问题

        return (
        <div>
        <NavBar onBack={back}>{detail?.title}</NavBar>
        <div
        dangerouslySetInnerHTML={{
                __html: detail?.content,
                }} ></div>
        </div>
        );
        };
