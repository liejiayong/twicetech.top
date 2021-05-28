(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{581:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pip-包管理工具-基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip-包管理工具-基本使用"}},[s._v("#")]),s._v(" pip 包管理工具 基本使用")]),s._v(" "),a("p",[s._v("pip 是一款 python 包管理工具")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("wget "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("certificate https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("bootstrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pypa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\npython3 get"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将pip3加入环境变量")]),s._v("\n\nvi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("profile\n\nexport PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$PATH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新加载环境变量文件")]),s._v("\n\nsource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"配置-pip-源镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-pip-源镜像"}},[s._v("#")]),s._v(" 配置 pip 源镜像")]),s._v(" "),a("h2",{attrs:{id:"国内源地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国内源地址"}},[s._v("#")]),s._v(" 国内源地址:")]),s._v(" "),a("ul",[a("li",[s._v("阿里云 http://mirrors.aliyun.com/pypi/simple/")]),s._v(" "),a("li",[s._v("中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/")]),s._v(" "),a("li",[s._v("豆瓣(douban) http://pypi.douban.com/simple/")]),s._v(" "),a("li",[s._v("清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/")]),s._v(" "),a("li",[s._v("中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# mac\nvi .pip/pip.conf # 打开配置文件\n# 插入以下内容, 即可切换为豆瓣源\n[global]\ntrusted-host=pypi.douban.com\nindex-url=http://pypi.douban.com/simple\n\n# windows在user目录中创建一个pip目录，如：C:\\Users\\xx\\pip，新建文件pip.ini，内容如下\n[global]\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n[install]\ntrusted-host = https://pypi.tuna.tsinghua.edu.cn\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"更改默认下载路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改默认下载路径"}},[s._v("#")]),s._v(" 更改默认下载路径")]),s._v(" "),a("ul",[a("li",[s._v("查看 pip 下载包的默认路径")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("python3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m sitepython "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m site "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("显示以下内容：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PS F:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("tool-library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" python3 -m site\nsys.path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Python38-32"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("python38.zip'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Python38-32"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("DLLs'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Python38-32"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("lib'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Python38-32'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Python38-32"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("site-packages'")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nUSER_BASE: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Administrator"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("AppData"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Roaming"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("Python'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("doesn"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t exist)\nUSER_SITE: '")]),s._v("C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Administrator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("AppData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Roaming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Python38"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("site-packages"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (doesn'")]),s._v("t exist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nENABLE_USER_SITE: True\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("可以看到你的 python 安装目录")]),s._v(" "),a("p",[s._v("USER_SITE：自定义 Python 依赖安装包的基础路径。")]),s._v(" "),a("p",[s._v("USER_BASE:自定义 Python 脚本")]),s._v(" "),a("p",[s._v("然后查看 site.py 所在目录")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("python "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m site "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("找到目录修改对应的路径，建议将路径设置在 python 目录关联的位置较好")]),s._v(" "),a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),a("ul",[a("li",[s._v("安装包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip3 install requests "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认安装最先版包")]),s._v("\npip3 install requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定版本包")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("批量安装包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r requirements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中 requirements.txt 文件格式")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Werkzeug==0.9.4\npsycopg2==2.5.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("卸载包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip3 uninstall requests\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("更新某个包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip3 install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("U requests\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\npip3 install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("upgrade requests\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("查看已安装的所有包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("显示包文件")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip show "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("files requests\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("指定安装路径")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip install requests "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Python"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("python"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("site"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("packages\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("安装某个包时指定源")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("pip3 install requests "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("douban"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("simple\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("安装离线包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 离线包下载地址 https://www.lfd.uci.edu/~gohlke/pythonlibs/")]),s._v("\npip3 install xxxxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("whl "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("查看系统支持的安装包")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("python3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"import pip._internal;print(pip._internal.pep425tags.get_supported())"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[s._v("#")]),s._v(" debug")]),s._v(" "),a("ul",[a("li",[s._v("安装离线包, 报错: xxx.whl is not a supported wheel on this platform")])]),s._v(" "),a("p",[s._v("解决: 下载系统所支持的离线包即可")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);