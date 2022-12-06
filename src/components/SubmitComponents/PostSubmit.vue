<template>
	<div class="big-box">
		<!-- <div id="my-toolbar1" class="icons-box" v-if="!markdownMode">
			<div class="tool-tip">
				<span class="tool-tip-text">Bold</span>
				<button class="icons" id="bold">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-bold " />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Italics</span>
				<button class="icons" id="italic">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-italic" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Link</span>
				<button class="icons" id="link">
					<div>
						<svg
							class="svg-inline--fa fa-link icon"
							data-v-d316172c=""
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="link"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
							data-fa-i2svg=""
						>
							<path
								fill="currentColor"
								d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
							></path>
						</svg>
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Strikethrough</span>
				<button class="icons" id="strike">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-strikethrough" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Inline Code</span>
				<button class="icons" id="inline-code">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-code" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Superscript</span>
				<button class="icons" id="super-script">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-superscript" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Spoiler</span>
				<button class="icons" id="spoiler">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-exclamation" />
					</div>
				</button>
			</div>
			<div class="space-in"></div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Heading</span>
				<button class="icons" id="heading">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-heading" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Bulleted List</span>
				<button class="icons" id="bulleted">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-list-ul" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Numbered List</span>
				<button class="icons" id="numbered">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-list-ol" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Quote Block</span>
				<button class="icons" id="quote">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-quote-right" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Code Block</span>
				<button class="icons" id="code-block">
					<div class="icon">
						<font-awesome-icon icon="fa-regular fa-file-code" />
					</div>
				</button>
			</div>
			<div class="space-in"></div>
			<div class="tool-tip">
				<span class="tool-tip-text">Table</span>
				<button class="icons" id="table">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-table" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Add an image</span>
				<button class="icons" id="image">
					<div class="icon">
						<font-awesome-icon icon="fa-regular fa-image" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Add a video</span>
				<button class="icons" id="video">
					<div class="icon">
						<font-awesome-icon icon="fa-brands fa-youtube" />
					</div>
				</button>
			</div>
			<button class="mark-down" @click="switchMode" id="mark-down">
				Markdown Mode
			</button>
		</div>
		<div class="mark-down-box" v-if="markdownMode">
			<span>Markdown </span>
			<svg
				class="question-mark"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="inherit"
					d="M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
				></path>
			</svg>
			<button class="fancy" @click="switchMode" id="fancy">
				Switch to Fancy Pants Editor
			</button>
		</div>
		<div>
			<textarea
				id="text1"
				class="text-area"
				placeholder="Text (optional)"
			></textarea>
		</div> -->
		<div class="temp">
			<QuillEditor
				class="editor"
				theme="snow"
				toolbar="#my-toolbar"
				placeholder="Text (optional)"
				style="color: black"
				ref="myQuillEditor"
				v-model:content="content"
			>
				<template #toolbar>
					<div id="my-toolbar" class="icons-box">
						<!-- Add buttons as you would before -->
						<div class="tool-tip">
							<span class="tool-tip-text-small">Bold</span>

							<button class="icon ql-bold"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text-small">Italics</span>
							<button class="icon ql-italic"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text-small">Link</span>
							<button class="icon ql-link"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Strikethrough</span>
							<button class="icon ql-strike"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Inline Code</span>
							<button class="icon ql-code"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Superscript</span>
							<button class="icon ql-script" value="super"></button>
						</div>
						<!-- <button class="ql-spoiler"></button> -->
						<div class="space-in"></div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Heading</span>
							<button class="icon ql-header" value="1"></button>
						</div>

						<div class="tool-tip">
							<span class="tool-tip-text strike">Bulleted List</span>
							<button class="icon ql-list" value="bullet"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Numbered List</span>
							<button class="icon ql-list" value="ordered"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Quote Block</span>
							<button class="icon ql-blockquote"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Code Block</span>
							<button class="icon ql-code-block"></button>
						</div>
						<div class="space-in"></div>
						<!-- <button class="icons" id="" @click="insertTable">
						<div class="icon">
							<font-awesome-icon icon="fa-solid fa-table" />
						</div>
					</button> -->
						<div class="tool-tip">
							<span class="tool-tip-text strike">Add an image</span>
							<button class="icon ql-image"></button>
						</div>
						<div class="tool-tip">
							<span class="tool-tip-text strike">Add a video</span>
							<button class="icon ql-video"></button>
						</div>
						<div class="icon" data-v-72dd2826="">
							<svg
								class="svg-inline--fa fa-ellipsis"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="ellipsis"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								data-v-72dd2826=""
							>
								<path
									class=""
									fill="currentColor"
									d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
								></path>
							</svg>
						</div>
						<div></div>
					</div>
				</template>
			</QuillEditor>
		</div>

		<!-- {{ content }} -->
	</div>
	<button @click="renderContent()">render</button>
	<!-- {{ content }} -->
	<div v-html="data"></div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import renderer from 'quilljs-renderer';
//import * as QuillTableUI from 'quill-table-ui';
// import * as Quill from 'quill';
// import * as QuillTableUI from 'quill-table-ui';
// Quill.register(
// 	{
// 		'modules/tableUI': QuillTableUI.default,
// 	},
// 	true
// );

export default {
	data() {
		return {
			markdownMode: false,
			content: '',
			data: '',

			// editorOption: {
			// 	theme: 'snow',
			// 	modules: {
			// 		/* toolbar : false, */
			// 		table: true,
			// 		tableUI: true,
			// 	},
			// },
		};
	},

	methods: {
		renderContent() {
			// console.log('hello');
			// // var renderer = require('quilljs-renderer');
			// var Document = renderer.Document;

			// // Load the built-in HTML formatter
			// renderer.loadFormat('html');

			// // Create a document instance
			// var doc = new Document([
			// 	{
			// 		attributes: {
			// 			bold: true,
			// 		},
			// 		insert: 'bold ',
			// 	},
			// 	{
			// 		attributes: {
			// 			italic: true,
			// 		},
			// 		insert: ' italic ',
			// 	},
			// 	{
			// 		attributes: {
			// 			link: 'link',
			// 		},
			// 		insert: 'link',
			// 	},
			// 	{
			// 		insert: ' ',
			// 	},
			// 	{
			// 		attributes: {
			// 			strike: true,
			// 		},
			// 		insert: 'strike through ',
			// 	},
			// 	{
			// 		attributes: {
			// 			code: true,
			// 		},
			// 		insert: 'inline code',
			// 	},
			// 	{
			// 		insert: 'superscript',
			// 	},
			// 	{
			// 		attributes: {
			// 			script: 'super',
			// 		},
			// 		insert: '2 ',
			// 	},
			// 	{
			// 		insert: '\nheading',
			// 	},
			// 	{
			// 		attributes: {
			// 			header: 1,
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'bullet list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'bullet',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'bullet list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'bullet',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'bullet list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'bullet',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'numberd list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'ordered',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'numberd list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'ordered',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'quote block',
			// 	},
			// 	{
			// 		attributes: {
			// 			blockquote: true,
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'code block',
			// 	},
			// 	{
			// 		attributes: {
			// 			'code-block': true,
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: {
			// 			video: 'https://www.youtube.com/embed/lyMm-r6_4LI?showinfo=0',
			// 		},
			// 	},
			// 	{
			// 		insert: '\n\n',
			// 	},
			// 	{
			// 		insert: {
			// 			image:
			// 				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIAAAAKICAIAAACHSRZaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAD6ISURBVHhe7d1fbFRXni/6osOgTBrFVu4ruDoeaI1GBr9GJIYRtydHweZqkgerJZCGSJF9pJtWehRa9APiAfGQqBN1Wp2RBt9IYXSJ1PJDMjoY0OQwloIdhscxWK1RzJjY+PVGLsTkIB/S3P23qmyX7bILlsv256MSrr1r77V3lVxVfL3W/q1tjx8/LgAAAPD0/Sj7CQAAwFMmgAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAHAqv37v/97dg8AVmPb48ePs7sAAAA8TXrAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAGA1rp36bvfe73a//nAyWwEA9RPAAAAAAhHAAFh3dx927/1u994H1+4+fPf1uH+p+5Mf0kcmP3mQPJR2Oj04P5ytT/xw7dT9ykN3s76pd4eTB7M288XY3LsL1yzX/uRwdjLRrftU2t8Vt/Dm58nD498fih+6Hx0XAOomgAHQLObefPX7wfFsIRIFqkPvz93KlqLMM3euv1SOT9dOld78/FG2ED30ah6N6rZc+8MPDvVXTubW59//Is+EANAAAQyAJrL99Jcv3Jt44fJbzxTuPvxtHKiyNfcmWj59I95i8PdJZ1T2aKHwxs6voke/3Hm6I1ms37LtT07+KV7oeC5uPHro1I7CRBTAdnw48UK6Wf7Q8/0vJosAUBcBDICm0Xu+kmcm/zXtm3p07tV0HGApH/v3KA5I2aPbT//3He3Rzxd39H+xszdeU6/l229vT74gx78/FI9LLLS/tfPy+zuShwGgEQIYAE1pciIfXrhAx/Y4cWV+9Bdr7YBaof3DO786tWN/dCcZl3ho7/3qK8cAYK0EMACaUvve7cnPHZ/GI/2qbl88WxXAlvbij/4yu1fbiu3HvV4TLV+df643Htz4aLD/wbVkPQA0QAADoCllgwALc7/9ZC6pQFgo3I3LHqYFEhc+enfu/OsPBpNVC+TXjC3cYPn2Jz+5330qWv9M++FnP/xFOvjwT/9ZXfAwGakIAKskgAHQnA7/eVpX49b7D5KC79/tfrWq7OGCR199cK6qfGJix2tptYy0XvziDZZvP658mK/vn4uXO3b8TTLcMe86m3szflQZegBWRQADoEk90/9FXH5wf7m8Ycf23lM7f//WM8lC/OjpN9IsFKejT79cWITjZ+/P2+D0l3kBw8xy7be/9ePKvoXt+9/Y+VVlaOKPP61qds0XoQGwJW17/PhxdhcANrK5d/fGgwx7z7/w4eFsFQA0GT1gAAAAgQhgAAAAgQhgAAAAgbgGDAAAIBA9YAAAAIEIYAAAAIEIYAAAAIEIYAAAAIEIYAAAAIEIYAAAAIEIYAAAAIEIYAAAAIEIYAA0jclPHnTv/W53dDv1cDJb1yTm3k1O7N3hbBkA1kQAA6BJDD849P7crfT+54+aLIAtMPfu62ke+yFbAQB1EcAAaA7X/mUu/tHx3FcTL9yb2PmzZGWTuvun/xiPfw7+iwAGwKoIYNAspj/47OKRzy5+MJ0tbzqb/gnSoB/+85vk509/1J78bGov/ugvO+Kfvf9tR7LcqGunkoGXrzfbwEsAnjgBDJrU9AeX07hSylZsNk/vCW76l45msOPDL164N/HCh4ezZQCojwAGzalU+nY2/jm8WVPE03uCm/6l25we7N5bOpcM6it8Ht3/bvepucLdh0lBjgfX7j5ML7jq/iQb7zc5/KA7WZPc7nefenjtbvpIoWqvuXdfv59uE20wOW+v+8teu/XDtVP3s1og0ZafzNXqlapRk6NSQSS6vf7gfOUQ6cbxKZ0/lZ1SvEF2zvGjb36e3B3//lD86P38IQA2HwEMmlNLy09a45+H29qS5UbdHI07hY5cvj2TrVhvT+gJ1nheT/qlY73Nvfnq94NpNktE6ehQ/9ytyppHtz7//s1XF4SWaK8Hg+OP0oVog0OvV+/1aLD/v5YIOT+cf7305uePslog0ZbvP/iHOiofXjv1XaWCSGR87lx/aX7JxPiUzn2enVK8wasPrmULAGwdAhg0qbaT3cevHDt+ctOGiKf3BDf9S7cp7bw30XI6uaqq8EZ0/4V771dfW7X99JfxeL/Lbz1TuPvwt2mGeWNnUqvjha/OP7c/Xn507h+TGh4VOz6N98qbjcJYusuX2fb/419rdYIN/6+0I673VEt8Gl/uPN2xPXlgWfFZRT+y84wO+ukb8erB3y+4pmv76fNxs1+dSp/d3NU4oe34cOKFdPu8AMnz/S8miwBsQtseP36c3QVCKd0cHbk4NZv8z6z1cOf+n3e07YprVFyP/jN2uCtNDgsWYzPjI++NTWX/n2stnti3v7etJVlINy6e6SlO3751YSoZgRdt8EpXb/x41lSV1hM9PclD88TtT5UmZ5PdC4X21uLBrIVIfohj+wujI2cXHiJS5wbLPMGaL8syZ7XU81rccmFmeuS921OTWRut7cXi8X37Xlpw5rVfPYKJu57i8BMFsDR93X3Y/er3t6IsdL5yqdXkJ/cPvR8FsB2fVpVJvHYqGcIXpZcvnm1ftNeiXbID7T/VEie6+eY1la1Lzb2798Fgpdl5i/khFksPmm1cdcSFa5Y+LgCbjB4wCK00ePlSlE/yv4vPDo9d/0MdhQFvjl7sK6evyOzUhZFL8ysKTp0dup7lh0i0wdDIzWyhDqXbcbrLc05kskYLUxeTk8+W4g2GBuddabXiBktZ4mWp66xWcHN0qG+knL4is5NTY2cXnXlDrx6hTE4kOadje3VKad+bdFKNr9vUYdlZLTb/PAFAAIPgpm9dSP6Tf7jz6JVjx6/0HDzRmlyxtLzS7YtT0Y/WEz3x4Lorx46eKcarh28vuKar9URX3OxAZ/JwYWo0TmhtJ48dT7cvtHYOxLvX6P4qtLQd7+w805OcVXxincl/HNMWKiZn80N0pS3OXrg9b4sVN6htqZdlubOq73nFL13SdPFgsk10Ymkji0+s5qtHc6mZtWqmspCys4r7u9IhiPlNdxY0o2nTorCuBDAI6+Z0HKSiwPDzjiQrtLT1dveUR8otZeZe2vc1e2EoqTnx2aWzSTOF2dnqANbe2ZUOStzVUUxHbH17v/5KgC0v7W4ZHR15O/laOjI0VrMzoXKItv0n0uRYKtU+hyU2qGnpl6Wus1pG/tIVz7wSD2iM7GrbdzxNWEud+VpePQJpb0+/t+Z+mxcnnBx+kJYQ3N/9Z42nnTzgff8PWQ3DuCLi/FoaNSw+q8LdpJRiXraxXuvXiQeJzTGNh8lIaHICGGwEM1Vj8OZpbU1DxRNQuv320PXh2fIgwBW1ZBegLWnFDeqw6rNaKHvp5r9Qu9LutfnxlY3h8J+nRTVuvf8gqdj+3aH+pPZGx46/X3RB1xq0v/Vsb3JnsL+U1IuPKyImK5a16Kx2v1rfjrm8D23uTWXoWUebYxoPk5HQ7AQw2AiywBCXuEhG4pVv3fueVAAr9xTloxwP5lUPllJa6attxQ1WtvqzWqhm1qqZytggnun/ouXTUzv2p7UNY9v3v7Hzqy8qNTkas+PDL3eefiONQ5Htvad2/t8r/9otOquOeMff150J29/68aflg3bs+AtVEFkXm2MaD5OR0OwEMAgrzwNjf8jSSenm6NCKw9B3PZ/2JU1dHJ/OgkQp3vHt8VVGnKX7fMqdbMn3Venm+K2ao64mx0YGkzOfya/aai9mQ/tSK25Q01IvS51ntczzWvzSzUyPpAM46zkxAooyTHLdVLkA/YvPXk6upCqXQMw987O3dl5ON45vz19+f0dl8OGivdrfej7ZrJzQsgMtLoGYeXFH//vpLnHjH76VNh4Xi69qdsFiZP5ZfVHeMZJtXHXExWue+Vn5oF88+4TCJKzW5pjGw2QkNDll6CG0xcXT04LpC4qnL1iMiwSmeaZae+fRj+OLprKN88XIwjUz40N9Y+X9a5Whnx45MpJeWDbPgvNZpHjmWNdL8Z16N1jiCdbYPX6osPxZ1XxeC1qu/dIVWotnuued2DKvHsC6m5m+/YfbY8PJp1l7sfPXr1RGQCw5SUk8intsMp5mo3V0NN63vVgsTMVblj9F53/ileZ/fkZqTxASWXpmlAXS9peepGTxSZa/uZaaQSTbZXXPourQxemhBRus5jX01UCj9IBBaG0new6eKCYdPrHo++zgz/MvgKW19HYfPdNZbK/sF+/467q/A3Z1dJ0pH7S1WONbsq1roKtY7kZoL0Ynmd2v1t5ZdfJRhulJM0zFihssYYmXZaWzWvl5LX7p4m/xgwNZ+gLYCKZH+kay9BWZnBp7Lx8BUd8kJfm+rcWDyYdhpYhuqfRt8vMn2XiBakvOm1LHQRdYeRaTykkmlptBpKVtNc8iamrBoeP0VW11ryE0Sg8YUJcVO4X0GgE8LVlvf2vnQHzpbzwe++Js8eNX2vL+mfK4hlISNqKglWyZ9xRFy/kG5YED2Zp8MR2tkH2SZ11D+ciIw51HT0Yf7KXpwdFb0/t6TrYse9D4INWyNuMjdsXFZmfiMJkMbSgevFJ5CskG+UlWVhYPDiQ1bGemb783kq2J9lrFs1jQVPwsrmcTn8zbYImnU/P0oCF6wAAAmlt2OevsWN/lkcHpuPM/Tl9RLKlvkpLDXZXksGt3Oqxg9vq95Hrd9FLbYnHxoIClJgip86ALrDhJSfVJrjiDSP3PIm+q9cS+pKn4Wcyr57SG1xAaI4ABADS5tq6BziRyJKPj+j7LqjeVKxUttEyV13z83uTU9ExhejQJG6sqGLiWg86z8iQl2SGWmUFk1c9iyYM2/HRgtQQwAICmF/d6HTs60NV5OA4es8MjIzfLmSQeepfO1ZHflpukpOVAeuns7NSN6fTSqWLSnVavNR202sqTlMzLWrn5qazRZ1HW8NOB1RLAgLq0nUy+kJa+vmvFDQBYo5nxobdHp2cKLbva9p3clw3Fi2LM2iYpqYzfu52Mvqs1ci+Sp6CFE4Ss7aCrmqSknhlE6n0WC5oqTQ9eTq9Jy6zt6UADBDAAgKY3OXW9L75C6WI2OUdr8UAUHPLrqSbH8keHLlUq/i2lJbueajLpU1pq5N6ujv3ptVLDI5fyi6OSltd20MLshaSdrAJHoXh8mT/YLTpEtldr1V71PYuFTQ1lFTgq1vh0YM0EMACA5raro6t6oo5kLo10gNwaJyl5qa08p8cyI/eWmjdlLQdd5SQldc0gUt+ziJuqPvSJnuNnyvvF1vgawlopQw8AwNNikhJYQA8YAABAIAIYADSL73bvXXzLHgNgUzAEEQCaRRS3Xrg3kS3k6slgi/eCJmEIIiwggAFAs6gZwOohpAFsFAIYADSLNQeweghpAM1AAAOAZvFUA1g9hDSAp00AA4Bmse4BrB5CGkAjBDAAaBYbIoDVQ0gDWIoABrCR1PP/Wja0rRNLVvxlltCATUkAA9hINk0PCaxINxqwKQlgsDrbtm3L7sF6+P927fE/Tih7qiHNBz4sQ4hYMwEMVif6Pvau4Ym7cOHCm2++Gd05ceLEp59+mq5cIP3d0wMGq9VISPOZDzV5azTCawer4xOH9SKAwdNjuCOsiv8ONcJrB6vjE4f1IoBBeNWf+UIalPnvUCO8drA6PnFYLwIYhLfaz3whjS3Cf4ca8aPsJwAADZC+gHoIr7A6/uTDetEDBuGVP/OFK6jmv0ON8NrB6vjEYb0IYPCUCFewWv471AivHayOTxzWiwAGa9BguPKZDzV5azTCawer4xOH9SKAwWIr5qsG3y8+86Emb41GeO1gdXzisF4EMLaaBjuvngif+VCTt0YjvHawOj5xWC/lAJYts0ltkYDdDOGqHj7zoSZvjUZ47WB1fOKwXvzubQWbo4dzo4SrenjfQU3eGo3w2sHq+MRhvfjd2wqaP4BtpnBVD+87qMlboxFeO1gdnzisF797W8H6BrCtFq7q4X0HNXlrNOJH2U9gC7jaH31gJl7+3Z1sXcWdq/0vv5w//nL/1XyLO7/L1+Zern54kcr20VbZulh29Hzd4mZj8YnVfiRT68yBFUXhasVbFK5WvGXNAbBWAhhsHVf/eSC7V7gxeHl+jolCz94jAzduZIs3bgwc+bslo86N+OG95Si1wMQfy60MnBOX4OlbkKNq3hbkqJq3rDkAniYBDLaMNH8d6OuLFxYksKu/+WWSmvo+mngcm7jSdyB5oErfleSh6LGP0seWj1cHDkRbLQp6i+XNpr5+Z09hzztfZ0uPryQnW71RvAFsIQtyVM3bghxV85Y1B8B6E8Bgq8jyV++v/nZxArvzzXjy88BfdafxZs9r579eKursee2d02kuuvHHZf5T19HbGyewX/6mdj8ZUJtwBbC5CWCwReT5q3vPa4sT2J6fdiQ/47i0Uo9V3X6a5rSBf5bAoF4LklV0yx4AYLMQwGBrqOSvQqFGAstWRXHpyN55FThquHO1/0h6MVnf376W/FxK2uoKF4INHMnKa0RU2AAANjkBDLaCO787V8lftRPY+cplX2mJjUVhKE9Ke/P4deX88vkravVX8eVidVwIBgCwNQhgsAXcuTwYl9jI81ehsPevkqw1LxnFl33FBTbKMeyXS5VBPHDgQN+Viccrxq/InmQY4rIXglUX4VBhA2BzyScWWTzCYYmZUe7k6xdX2s3bmv/I8jOsQBMSwGDzy/JXlIP2Zl9Se9Oah4v7pva89s75ryey2oMLHi0npa+//vr8a/UmpbQTTD16AKotNTPKnuxPhIuvIM6/zOYPf1+qHWheAhhsevlXVi01v63yMh1PRtYJNnj5m2wFAFtedmVyjZlR9nTHNXQj49/M+4JaLn/VnmEFmpQABptd+Str3nxbjyfSybzSb6ur/UnhjfR7687V9IqxQqHjp3X1c11NB4W8/Lslxhkmee7G4GBa6h6ALS+vDFVrZpQ8gc2PU8vmr5rtQLMSwGCTq/2VtegLLim8kY5Q3Hskm5R55SIbiTvfpEe4MTj/j5UVyTDEGzeSrRaproJoBD/AVpDnppozo9ROYBN/XCZ/1W4HmpQABptc9pV14K/2JosV1V9wr/0qLr6RLMYOHOj7qL4iG7E9P00bOtC7ZIfZnnf+Ke1wq3UiAGwtldyUDZJYOYGluyyZv2q3A81p2+PHj7O7QB22bfOuYX343YPwvO8aded3Lyd1nw58NJEXus1Wlddc7d8WT29StcXi3bJt+q5U/XGwnnZ4Wrw1GqEHDACAULKR8SvMjDK/D6xW/1dd7UAzEsAAAAgkvzJ5hZlR5iWwZfJXPTOsQJMRwAAACCPPTbXUTmB/nFguf9UigdHkBDAAAJ6OrBJUPq9JnpuWmxklkyewgSPxlV1L5K862oGmI4ABAPBkXe1PxwWm4SlPT+XcVB2mIjXKHlZWpmrnr3ragWYjgAEA8NTEM5tktQvrmhklWRGrTmDzo9bq2oEmo4IkrM42dVdZJ373IDzvO6jJW6MResAAAAACEcAAAAACEcAAAAACEcBg07vzu5e3xV7+3fwrkheuz5ejNf1XkzWprJRVvi6vbDVvmwWry03NO+ZSJwIAsGUIYEAmn6ylULgxcK6xjLTnndN9yZ0bv/xNOadd/c0v06rBp99JZoMBANh6BDBgvgMHDjyBAr6vnb+SRrA8y9353blkMpgDH/1q/qwtAABbiAAGzNfRG0+iUt11tTav/eqjdDKWuKU7v/s73V8AAAIYsNBP0/GDA//cYAIrj0McOPdyHr+uZHNxAgBsTQIYsMhrf5sksAYvBKvqBLuRxC+jDwGALU8AAxZLk1PDF4IV9nTHwxkzB3q7jT4EALY4AQyoIR0+2PCFYHnhw0Tjl5UBsI7yyUTmT0OSz0Iyf4qRbNtk5cJJSMpTlSw/60lls7KXX472uFPzb4N37lztjx7ONoxEm/7uamXTtZ58shw3nWyXNFvVKqyFAAbUlHaCNTQMsVL48KP5FREB2ID2/LQj+TnvGuE734ynd+aNmrhzeTD5+1vHT2sMfVj7rCc3btwYOLJ376IMFCWmvXuPDGQD3lPRpr88Em+aLq755OO246bjNZH4DP7OlxkNEcCA2rJOsMHL32QrMnv/Kh1VOP5N9fdP/iV24K/2Jj8jVfN+vVOuiOhbC2DDqvEFkIeVyI0/TmT3yhmr6jthsXpnPem78jgzcSX7MpmXgeKElH7fHPjoykR507580yyCrfHky99lH6VN5w3D2glgwFKSWhw3Bgezvw9m8uu64jCV/QnyztW8ynzlOq+r/Ueq5v2qOTMzABtK+QugkpoqvVnVnUvZH+WWv/Z39bOe7Hntna8n8j/o5bvlCenARxNfv/Nafrw9r53/ev58lGs7+cqfF7OnEjf8tQlVaIgABlvGjV/uzUawR+YPd19CMgxx3oiO2J53/in/+juStrj3SP7t90/Zl1I++rAy79eimZkB2GjycXzl/qKr/xx/2Cd9WZG8c2nZAYgVa5r1pDLFSbpbOSEtDntpSd/y2a7p5Ms7RYHPlxdPiAAGm17+7bEG5awV//GvMo5kzztfT1z5qC/7zoodONB3ZWKi/DfB8oiN6nm/5s3MDMAGlGeaLK1k6afjdBqK8miT9Sz1/e1Kc4+sadaT+eeQ92LVCnsLRh2u6eTznQoDR/aqwMGTIYDB5vfa+WTc+jxRVopiVH63erP5UyXnG5W3yux57Z3zX2cPRb7++vxreyob5Edcoi2zMQNsUFkeycbxpWElyipZ1El7pfIxfMtdAJZpeNaTyhDBlQ+2tpN/7Xzlsq+kBkh9Y0hgaQIYAAB1ytJK0l+UjeGLskp+gVXcuZSN4atv8sc1zHqSZ67EonGFy1rbyceXfcUFQMoxTEEpGiOAAQBQp6q0ko/hiwf/ZUEo7lzKxvCtcAFY2apnPak96DAbVzjPoi0bOPlk4MdEdjVzA112IIABAFC/clr5zW+SzqLsYql8eN8fL6fJZuULwHJLzXpSW6XI07zj1shEC7eMNXjye/KjQSMEMAAA6panlYGBOMKUL5bKr6T6ZVKFqf78FUlaXDTryWJ3rlZN+RXPcRIrJ7Bf/l2lQkbNLWOrPfmr/UnhjbTdqNUs09XbvQe1CGAAANQvSyuJysVS+fC+RKWGRV1qz3qSGTiSzHgSKU960nelqjLUa+fzucHiChnLbRlb9cknhTfmT7rSV13iF1ZNAAMAoH5VaeVAVVfQnp9WVtdVgKPKErOeLHTgQN9H8aQnC/JPPDlKXKqwanaUbNOFW6765F/71bxZV+JWJ9TypUHbHj9+nN0F6rBtm3cN68PvHoTnfQc1eWs0Qg8YAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYAABAIAIYwEby8OHD7B4AsAEJYAAbybPPPpvdAwA2IAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgkG2PHz/O7gJ12LbNu4b14XdvA/lu997sXu6FexPZPTYU7zuoyVujEV47WB2fOKwXv3tNZXHEqrYgbkUbC2AblPcd1OSt0QivHayOTxzWi9+9kJbPV5FVBSoBbOPyvoOavDUa4bWD1fGJw3rxu/dkraoLq0EC2MblfQc1eWs0wmsHq+MTh/Xid29VnmwXVoMEsI3L+w5q8tZohNcOVscnDuvF7161pspXKxLANi7vO6jJW6MRXjtYHZ84rJet9ru3fMTaWHlGANu4fOZDTd4ajfDawer4xGG9bLLfvY3VhdWgFZ8szUx4hsX8d6gRXjtYHZ84rJcN97u3mbqw2LL0XkJN/jvUCK8drI5PHNZLs/3ubakuLLYsAQxq8t+hRnjtYHV84rBewv/u6cICAQxq8t+hRnjtYHV84rBenvjvni4sWJEABjX571AjvHawOj5xWC+r/d2Tr6BxiwPYiy+++O2330Z3/u3f/u2ll15KV8JW479DjfDawepEnzjZPQhuwSf28hFLvoLGRe+y/2PmTrYAVBEi1kwAA9gYFsctEQuetsU9YAANEsAANio9YPC0CWDAEyeAAWxOy8eziP9WwooEMOCJE8AAtigJDVYkgAFPnAAGQG3LJzT/K2UrEMCAJ04AA2AtdKCxFQhgwBMngAHwVOhAYxMQwIAnTgADYB1sqQ60FZ8szUwAA54sAQyAZrSZOtD0ogBQJoABsPFsrA40AQyAMgEMtpzpDz67PlwoHO46frItW1Ule7S98+jHHS3ZunmW3x2aRFMlNAEMgLIfZT+BrWr6g8sXj3x28YPpUrYCNoNb/+//E2WeZW5RKFrmlrUCAE+aAAZbXKn07Wz8c1gAY1P567/+6+zeEhbksQW3BXls8S1rBQBWSQCDLa6l5Set8c/DbQYUQtmCPLb4tiCPLbhlrQDAIgIYbHVtJ7uPXznmgi5YlQV5bMFNHgNgKYpwQBObGR95b6o0OZuMESwU2luLB1/p6m0pFEq33x4am5xXCWNe8Ywld4wtqKJRe7G98+Dx2Vtnp5IWWosnltw9Fh9ubCo6n1i08b79vW01C3jEZqZH3rs9NZmdWmt7sXh8376X5jVePNNTnL5960KNowMAbGh6wKBplW7HqSYPUZHJ2akLQyM3o3stbQeTcYPDt2/PxD+TS7mSnz95vmW5Hes2OXY9S1+RePehwSWuEbs5erGvnL4i0cYjlz6YzpYWuDk61DdSTl+R2cmpsbMLG586O3Q9S1+R1Z88AECzEsCgabW0He/sPNNz9MqxeIjglZ7O9njt1GicbVoOFJMENjt1I4kuM/fSCFR8pW35HevXeqIrbmGgq5gszl64XWv/0u2LU9GP1hM9ybGOHT2TbF5JhtXijZNYVTw4kJzbQFd6bosbz4/emR59tScPANCcBDBoXi0v7W4ZHR15+7O4TPyRZMxh2a7dxTS6XL8XJ7CZtL+rWHwp/rHcjnVq7+xKhxHuatt/Isl6hVJpcabKg9/shaHkWJ9dOhvnsWjF7NIbF8+80rYrWbOrbd/xNGHNb7xy9I7i4WTNt/cVaQQANgEBDJpWfKHX9eHZ2drxKR+FODk1PVOYHk1iT1bJcPkdV61l6eu58uC3WGtrGrGqZRvPf2hXa9qVVyOwAQBsOgIYNKtyf1E+uu9g2heUqxqFOJ1eAJaMP1x5x9UqLTNDWBafCsUzyZDCyq173+IAVjNr1UxlAGwK0x8kYzHeHjeKAcoEMGhW5c6ltFfr5vit4WSxrDIK8XaSuLLxhyvvWI/JsZHBJHjNTN+6kLTXXszGDVbb9XzaOzZ1cXw6i1Wl0s3RoZrftYs3npkeSYcs1mwcAGDTEcCgWb3UltWfOBtfXnXp7FgWqypasguo0oKH5ZmUV96xLrMXRi4d+exi30h6UVfxeEetkYj5FWKTY9f7skvOLlXKJy6waOOs8dYlGgcA2GwEMGhabV0DXWkfV6y9ePBEGqyq5Fkrko0/jNWx40qKZ3qivdLhhXFAOtPTlXavLdLS2330TGexPd+20Np6uPPgr2sHqkUbx/OAHRzoXqpxADaMm6PJn+Eu16qCC1SYiBkAgIZFASweVd7aOVC5DLg8uf/Rj410gIwABgBAQ7KgVaX1RE9Pb0s5gB08PnsrG6DeWjzxSldvVRybGR95rzyhf/Tovv3pTCSwSRmCCADA0zQ5dr1yefDs1IWhkZvZQtxv1ldOX5Ho0ZFLH5h8n81MAAMAoCFtJ48dP5Neb9zaORDPR9JT3ccVd4h1Hb1y7PhAZ1YmajSNWKXbF+NiTK35vClH00aGb7uQjE1MAAMA4Glq7+xKRxXu6iimU1N+ez+Z6SSbuHL2Qly2N6ncm1beNTs/m5kABgDAeihPXLmQ2fnZzAQwAADWw67WdFqS4pl4/GHVrVJHETYfAQwAgCdlNaMHdz2fXig2dXF8OturVLo5OvT2eDxAETYpAQwAgIbl3VlTZ+OruYYG68lQbftPJDtNjl3vi/e6eGToUqVeImxOAhgAAA3b1dF1pphmsHg6r/qm8mrp7T56prPYnu9XaG093Hnw12ZtZjMzETMAsKnMzs62Zp0xAE1HAIPmNf3B5evDs4XDXUdP1veHRAAAmpshiNC0SqVvk2Hww9OuRQYA2BwEMGhaLS0/SYbQHG5rS5ZXdnM0uYL58u31nb+ySU4DAKD5CGDQvNpOdsfToZysN38BANDkXAMGzWv6g8+uDxcKh7vSDJYuFs/0FKdv37qQVultLZ54pas3vkAs27hK64menuShwsz4yHtjU5PJ2niXfft704vKSrffHhqbjNtsHR0dG54ttHce/bijtOyBMku0udxpAABseXrAYIOZOjt0PQtFkdmpC0MjN7OF2m6OXuwrJ6VItMvIpQ+ms6VE1GacvuZb7kB1tAkAwGICGGw8rSe6jl45dnygs5gsTo3Gyaft5LHjZ9IVrZ0Dx45fOZb0O5VuX5yKV53oiUczXjl2NN1m+PaCC7SyDT6eN/VKzQMt3+YSpwEAQEwAg42mvbMrHUC4q6N4OFnz7f0lyyTO3Ev7qWYvDCWFMT67dDbOTtGK2eoAdrirRkxa6kB1tgkAwCICGGxqM7MLRxZmWlt3ZfdW7Wm0CQCwNQhgsKntak0q2ReKZ+LRgFW37n1rDktPo00ANoGZ8ZG345ERF4+MmokEliKAweZTNRRw1/PpyMKpi+PT2cpS6ebo0Nvja5/cud42jUgE2FKmRyr1mabCfwVMf3A5zn4fTK/9C25ZT7t9tg4BDDaRvG9q6mz8B8ihweg7om3/iWTd5Nj1vvSvkkOXzpZrG67NSm3WOA0ANrub08kFwVkFpq6XkpXhlErfJl9Ew08pID3t9tlCBDDYRHZ1dJ0ppuEn+gosJhU0Wnq7j57pLLbnqwutrYc7D/56XrXD1VqhzVqnAcDmVsqCSUtLgOHoN0eTP/9drhro2NLyk+Sb53BbPHXmk/e022cLMREzANRr7t29DwYLhd7zL3yY1gYFMqXBy5cuzBYKxYNXXnnqESUKYHEB3tbOAZcfs/EIYABQLwEMaho58lk6IUkuimH7Sm8PjU3GM50cP5klsukPPrs+XFmTLhbP9BSnb9/Kpv5vLZ54patqZpTSzdGRi1OzyaVlrYc79/+8o/CHpJEqrSd6enpbFjQem5keee/21GQ2Rr61vVg8vm/fS1nj9Ry92sL2Z6Zv/+H22HCyX3ux89eviILUyRBEAADWzdTZoetZ/onMTl0YGrmZLcS9amez9BWZHR67/ofpbGFFN0eH+kbK6SsyOzk1dnZowZXJyxx9WdMjfSNZ+opELb/XQHUrthgBDACAhnRdOXY0rc8U930dO77KUYitJ7qORnsNdBaTxanRNGVN34rHNBYKhzvjR6/0HDwRF3lqO3ns+Jl0w6zgR0+NPqvS7YtprCoeTLY5PtDV2R4vz164vSDDLXH0Zc3cT+JWdgLxddGFWQGMOglgAACsn/bOrt6kXtOujmI6tvfbJN6Uyyr+PC3y1NLW291THl64vJl7aUH84plX2tKRgbva9h1PE1apVF0if6mjLy+bkWV2rO/yyOB0XH3q46d/5RubhQAGQDB3H3bv/W733gfX7j589/Xoznfdn/yQPjL5yYPkoeT2+oPzw9n6yORwtnG8/amH+WCkuXfTpgo/XDt1v7Lj3ezh1OTwg+58391770e7X6tskLdwd+78ki0s1zjQtGZmk+6v1tbq67KyWVKeyDSVbV0DncW4S2126sLIpb7Phj6oe2wkW54ABkBoc2+++v3geLYQuXbqu0Pvz93KlgqF8blz/aV306vshx8c6q9sfOvz73+RZ7bE3G9fL735+aNsKdrx1fvlmBRlp0P9c7cqB3oU7f5m1QaJ6GQenJvXQhTqMtdOLWg8rsAB1KWl5SfZvXVQM2vVTGVrFvd6HTs60NV5OD7U7PBIfRePgQAGwHrYfvrLF+5NvHD5rWcKdx/+9vPKmnsTLZ++EW8x+Pu4s2ty8k/xQsdzX6UPndpRmKgOYIVb49tPn2+Jdvzq/I5kxaNz/zgX/4ybTbLTGzuTfaMNntsfL+cbVOQtRI3H5q6m2S87sbyFL3ee7kgWgdUYvp3M1lWaHry8oHrhCvIQNfaHbIqx0s3R+R1NS/dlZUMEC1MXx6fTbWamR+LK9XHFwmxQYiNmxofeHo1abtnVtu/kvmxooymaqY8ABkBwveef738xuz/5r2nf16Nzr6YDBUtvprFn/FEUwNrbky+q8e8PxeMSC+1v7bz8fhqTMvtP/bj/8DPRnfbDf54FpG/+FCe3rNkdn76/I7nyPtrg2b9Pol26QVmlhbd29CZr/mMyznh5C9tP//ekhRd39H+xM90AqEPbK2kwmR3r++zikaHraUWN+u3q2J9elDU8cimedvmzuCJisiLPZoWps/H6BYUNE23706Igk2PX46N/drFvJL2irHg8vaKsYZNTWctH8pYPPJmG2fQEMADW1eREPsZvgY7tcew5vPOrUzvinqtkXOKhvfezoYk1PPMXP83uRbJm00Zy7Xu3xz+SaFe3H/1FnhWBVXnplaMnimlSivPJiZ68emG92k72HKy0EM8DdvDnSamLXR1dZ6paTopoLNDS2x0XJ2wv7x3PA3ZwoLvrpWyxIdEJVJ9Y0rJ5wKjTNhMxQ1PLJvuPPtnzOk5PSDahZHvn0Y9r/S1wJp7hJD7wmWNP5rsKYncfdr/6/a35ExlPfnL/0PtRWNrx6cTOn2XrFvthcvh//8Pv04vB0i2zOZH3n2qJxzEm25x/vXQu2qDjua++eLZQq9lrp76Lu9eSDdprtDBvTa0TyzYwETMAa6UHDJra9GgyruFw25NNXyvb1ZZW461rOhRoRDbIsDD320/mso6pu3HtwbRAYpSCuk9F659pP/zsh79IBx/+6T+rqmjcev+/0pKJk8P/K05fUXzq/rP2Ws1ODj9IBzemG6xoYQt3586/rggHAA0SwKCZTU8lg62K6zG5SDZ2f3haAuMpy6/duvX+g0NpwfdXq2oPxpUP8/X9SfGMjh1/M29M4KNz/aXo0UPpo4Udf592Zy1qNtugI99gRQtaePVBGvAAoAECGDSxfA7KJ1Mwd7WyS5ynptTV5Sl7pv+LuLzh/nKNwY7tvad2/j6JSe1v/fj0G8mFW7Ht+9/YmYwerNh/amdlg44dn35ZHi64qNls92UGOi4Qt1Dd+OkvX0grNALAWrkGDJpXafDypQuzS16m1ZgVrgGLlW6/PTQ2WWg90dPTq7ITTWfxFVwA0Pz0gEHzKk0n5XZ/kk1mEkWmuNzt2+N5td0oICVrKpOiLFozMz6Srolvl0cGa8xREk+rUtmg+vFsDs3Z6/fMbAIA8EQIYNC0SqVvs3up7KKsyalsTslCaTYtLVC5TCtbk10zdnP0Yt/YVFbVIDI7dWHk0rwpLKPWxq6Xp1WJNxiqnk2lpa1SvRcAgMYJYNC0sjTVWp7e5KW2JIHNTt1IMlJ2hVgkv0wrW1MsxoXjS7cvxkutJ3qOXzkW3Y6ms68M376d5bdM64muo9EGA13p5CyzF27Pj2hRSJvVAwYA8EQIYLCBtLQmtQdmk4GEaYX61mSKybRYfFazvr01Tmwz99K+r9kLQ+kQxEvxfGLxitnqANbe2dWbJLxdbftPpP1dpdL8hAbNaceHEy/cm3jBBWAAbCgCGGwgLW0Hk4wUjzlMByi2Fo8n/WPf3i/lNetbD+5OAthsPrBwgSVrKraUu9oAAHg6BDDYSFoOFPPS8EkHV3uxLR2XODk1fTPKYJHW4oEkR2VF5AvFM/H4w6pb974lAlipRoUOAACeJAEMmta8AYeZXbuLycrSxbhyRtLZ1VY8HK2YHTs7Fnd5RZEszVe7stqJUxfHy0U74oKHlSKKicmxrDTizPStC0mfWbmFOJKla5IxjQAANEwAg6aVVYFPhheWZaMQZyfjaJQOGsyqIyay8Yex/JquybHrfWmV+aFLlYKHFbMXRi5Fj/aNpJeIFY8/+TnHAABICWDQvLIq8POLEOajECNptcO4fkaewPLxh4mW3u6jZzqLSZWORGvr4c6Dv56Xr4pneg6eKDfYGi12pW3Gsjr4VaEOAICGbHv8+HF2F2g2N0cvxqULWzsHlrxw6ymaGR/qi4c1Fs8cq0pl0LDJTx784v25W9G9N5776v1nk1G1ALBFCGDQzKZHjsQjA1tP9PT0hu6FKg1evhRfFVY8eCWd1xmeiOEHu/vnsvuFHZ9O7PxZdh/Y8GamR967PZUMko+0theLx/fteyn7/pr+4LPrw/HIi+L07VsX0iHxrcUTr3Qt8QWXb39sf2F0JBtCv3D70s3RkYtT2bSZhzv3/7yjfBkzNC1DEKGZpQU2CrPX782rnBFCafp68mV3uE364km69i9J+up47qt4Fi/pCzaPm6NDfSPl9BWZnZwaOzs0NDjvG2zq7ND1LH1FZqcuDI3czBZqmrp4ueoC5nj7coPxHwqjh5L0FZkdHrv+h3hWTGhyAhg0tbafd8YXaE1O5ZUMQ5kppV9pRb1fPFE//Oc3yc+f/sjIQ9hUSreT8rzxuImBZNaTga7OtJbvhdsLUlHria6j8Qad6QXMU6PLpqbJ2Xz7rnT7vMG8eO/hzvjRKz0HT2Tzr0CTE8Cgue3q6Fl28q6nZVdbV3xcV38BUIeZZHbK+LLhV/LZUNr2HU8TU6lU/TfE9s6u3qSG766OdJTH/GK/i1S2z6v7pg3enE6K97Z2/jwtLtXS1tvdc9IfDdkABDAAAnmwe2/p3Hhy9/Po/ne7T80V7j7sju7sfXDt7sN3X4/ufNf9yQ/JFoXJ4QfdyZrkdr/71MNrd9NHClV7zb37+v10m2iD6P9/VXvdf3c4a2qxyeHscOUdyyY/eZA0ntxef3C+3MjiUz2VbfnucLZJoTD3brKm8izqby3fBTaimdmkN6q1tfrPhbvSLqnZ2Sc0iCOdfAU2OgEMgPU39+ar3w+m2Sxx7dT9Q/1ztyprHt36/Ps3X71/vpzBYtFeDwbHH6UL0QaHXq/e69Fg/3/N3z43/OBQf+Vw0Y6/yMPPtVPfHUorNKbG5871l6ryVaTqVPfu+L864p+Dv88j3N0//Ufy8y/bn4n+XV1rsJHVzFo1U1kDStPBL4iGp0AAAyCQnfcmWk4niaXwRnT/hXvv70gWUttPf/lCtPLyW88U7j787edJrHpjZ1Kr44Wvzj+3P15+dO4fyxUUUzs+jffKm43CWLrLl9n2/+Nfa3QrTU7+Kf6RFQJp+fTUjsJEsll83OhHdibxQ2/Eqyv5KlM+1R1/0709XjE+9z+TpDf5r2nc2vHa4TW0Fmc22KB2PZ92Tk1dHM8uWp6ZHolnUikU2osNVSacHBsZTILXTH7RV9pgHvnG/pDFstLN0aEPFOFgAxDAAGgCveef738xu1+OMZ++vyOt1dF++Nm/T9JL4Zs/VaeX3vM7fxbv9UwWhMq7vPhnad9UTe3tyZff+PeH4jGBhfa3dl5OomB+3EfnXk0HDZbejBNUnOvmH7Ryqu3/547qpDc5kebGHT9bU2uwgeUXaE2OXe/77OKRzy72xdOoFAqtxePpNVprN3th5FKlwULW4K6O/eklZMPJo0c+qyqWCE1NAAOgyWQxpmN7daXE9r1pX9O89LJGh3d+dSoJTsmYwEPx1WLx6uy4i80/k3nypHfr8v+eLMxdTSJW739L4twaWoMNrKW3++iZzmJ7Wicj1tpePDjQ3Wgxp/bOgyeKeaOtxTM95QbbTvZUPRTPA3bw54pwsAEIYAA0mZpZq2YqW7O412ui5avzz/XG8enRYP+Da+XjxtNDp4MG89sXzy590LzzbXzufw6nF4Al4w/X2BpsaC0vdXR93B3XoE9uPR/nFRETbSeT9R9XOsQWr6mppfeVpCBwdIviXPW2LW2Vh471nDQLMxuDAAZAk8mGCBbmfvvJXJrBJocfpOP39nf/WePpZfKT+92nopafaT/87Ie/SK9D+9N/3q1x3MLdH66dur98fcLKKMTfJ2MOk/GHkbW1BsBmJ4AB0GwO/3laVOPW+w8OJQXcD/UntTc6dvz9E6pUcevzrOXdect/82KN4+5+tfRmWg5kGS9m16fdSuoxpuMPY2trDYBNTgADoOk80/9FXJxwfxJgEtv3v7Hzqy92pp1LDWp/68en30jHB0bSltNhgYuO27G999TO36+U+n5WDl35+MPEGlsDYFPb9vjx4+wuAAAAT5MeMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgCAKhf8fe9NbgR/imREAAAAASUVORK5CYII=',
			// 		},
			// 	},
			// 	{
			// 		insert: '\n',
			// 	},
			// ]);
			// console.log('hello');
			// this.data = doc.convertTo('html');
			var QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;
			var deltaOps = this.content.ops;
			// var deltaOps = [
			// 	{
			// 		attributes: {
			// 			bold: true,
			// 		},
			// 		insert: 'bold ',
			// 	},
			// 	{
			// 		attributes: {
			// 			italic: true,
			// 		},
			// 		insert: ' italic ',
			// 	},
			// 	{
			// 		attributes: {
			// 			link: 'link',
			// 		},
			// 		insert: 'link',
			// 	},
			// 	{
			// 		insert: ' ',
			// 	},
			// 	{
			// 		attributes: {
			// 			strike: true,
			// 		},
			// 		insert: 'strike through ',
			// 	},
			// 	{
			// 		attributes: {
			// 			code: true,
			// 		},
			// 		insert: 'inline code',
			// 	},
			// 	{
			// 		insert: 'superscript',
			// 	},
			// 	{
			// 		attributes: {
			// 			script: 'super',
			// 		},
			// 		insert: '2 ',
			// 	},
			// 	{
			// 		insert: '\nheading',
			// 	},
			// 	{
			// 		attributes: {
			// 			header: 1,
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'bullet list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'bullet',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'bullet list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'bullet',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'bullet list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'bullet',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'numberd list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'ordered',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'numberd list',
			// 	},
			// 	{
			// 		attributes: {
			// 			list: 'ordered',
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'quote block',
			// 	},
			// 	{
			// 		attributes: {
			// 			blockquote: true,
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: 'code block',
			// 	},
			// 	{
			// 		attributes: {
			// 			'code-block': true,
			// 		},
			// 		insert: '\n',
			// 	},
			// 	{
			// 		insert: {
			// 			video: 'https://www.youtube.com/embed/lyMm-r6_4LI?showinfo=0',
			// 		},
			// 	},
			// 	{
			// 		insert: '\n\n',
			// 	},
			// 	{
			// 		insert: {
			// 			image:
			// 				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIAAAAKICAIAAACHSRZaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAD6ISURBVHhe7d1fbFRXni/6osOgTBrFVu4ruDoeaI1GBr9GJIYRtydHweZqkgerJZCGSJF9pJtWehRa9APiAfGQqBN1Wp2RBt9IYXSJ1PJDMjoY0OQwloIdhscxWK1RzJjY+PVGLsTkIB/S3P23qmyX7bILlsv256MSrr1r77V3lVxVfL3W/q1tjx8/LgAAAPD0/Sj7CQAAwFMmgAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAEAAAQigAHAqv37v/97dg8AVmPb48ePs7sAAAA8TXrAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAAAhHAAAAA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Etv3v7Hzqy92pp1LDWp/68en30jHB0bSltNhgYuO27G999TO36+U+n5WDl35+MPEGlsDYFPb9vjx4+wuAAAAT5MeMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgEAEMAAAgCAKhf8fe9NbgR/imREAAAAASUVORK5CYII=',
			// 		},
			// 	},
			// 	{
			// 		insert: '\n',
			// 	},
			// ];

			var cfg = {};

			var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

			this.data = converter.convert();
		},
		switchMode() {
			this.markdownMode = !this.markdownMode;
		},

		// @vuese
		// set content
		// @arg The argument is a string value representing content
		setContent(value) {
			this.$store.commit('posts/setContent', {
				content: value,
			});
		},
	},
	components: {
		QuillEditor,
	},
	computed: {},
	watch: {
		// @vuese
		// watch content when it changed set it
		// @arg The argument is a string value representing content
		content(value) {
			this.content = value;
			this.setContent(value);
		},
	},
	// setup: () => {
	// 	const modules = {
	// 		name: 'QuillTableUI',
	// 		module: QuillTableUI,
	// 		options: {
	// 			/* options */
	// 		},
	// 	};
	// 	return { modules };
	// },
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
div {
	display: block;
}
.big-box {
	margin: 16px 16px 0 16px;
	border: 1px solid #edeff1;
	border-radius: 4px;
	position: relative;
	height: 200px;
	/*min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;*/
}

.icons-box {
	z-index: 8;
	height: 42px;
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 3px 3px 0 0;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: nowrap;
}
.text-box {
	overflow: auto;
	border-radius: 4px;
	font-family: 'Noto Sans', Arial, sans-serif;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	-webkit-user-modify: read-write-plaintext-only;
	outline: none;
	user-select: text;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	z-index: 11;
	position: relative;
}

.big-box:focus-within {
	border: 0.5px solid black;
}

.text-area {
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 30px;
	width: 100%;
	border-radius: 4px;
	font-family: 'Noto Sans', Arial, sans-serif;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	color: #000;
	z-index: 15;
	border-style: none;
	border-color: Transparent;
	overflow: auto;
	outline: none;
}
textarea:focus {
	outline: none;
	border: none;
	border-style: none;
	border-color: Transparent;
	overflow: auto;
}

.icon {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	line-height: 0;
	outline: none;
	padding: 4px;
	position: relative;
	margin-left: 5px;
	flex-wrap: nowrap;
}
.icons:hover {
	background-color: #ccc;
}

.icon {
	font-size: 2rem;
	color: grey;
}

.space-in {
	border-right: 1px solid #edeff1;
	box-sizing: border-box;
	height: 14px;
	margin: 0 6px;
	width: 1px;
}
.tool-tip {
	position: relative;
	cursor: pointer;
}
.tool-tip-text {
	text-align: center;
	width: 60px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-35%);
	opacity: 0;
}

.tool-tip-text-small {
	text-align: center;
	width: 60px;
	height: 25px;
	position: absolute;
	color: white;
	background-color: black;
	border: 2px solid black;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	border-radius: 5px;
	visibility: hidden;
	padding: 2px 2px 20px 2px;
	transform: translateX(-20%);
	opacity: 0;
}
.strike {
	width: 100px;
}
.tool-tip-text::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip-text-small::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 100%;
	border: 8px solid;
	transform: translateX(-50%);
	border-color: #000 #0000 #0000 #0000;
}
.tool-tip:hover .tool-tip-text {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.tool-tip:hover .tool-tip-text-small {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.mark-down {
	border-radius: 9999px;
	/*position: absolute;
	left: 88%;
	width: 94px;
	width: max-content;*/
	width: min-content;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 16px;
	text-transform: unset;
	min-height: 24px;
	height: 40px;
	min-width: 24px;
	padding: 4px 8px;
	color: #0079d3;
	display: block;
	margin-left: auto;
}
.mark-down:hover {
	background-color: #dae0e6;
}

button {
	color: black;
	display: flex;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 4px;
	background-color: #f6f7f8;
}
.mark-down-box {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	box-sizing: border-box;
	height: 40px;
	padding: 8px 16px;
	background-color: #f6f7f8;
	/*display: -ms-flexbox;*/
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
}
.mark-down-box span {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #1c1c1c;
}
.question-mark {
	fill: #878a8c;
	height: 12px;
	width: 12px;
	position: absolute;
	left: 11%;
	cursor: pointer;
}
.fancy {
	border-radius: 9999px;
	position: absolute;
	left: 75%;
	width: 189px;
	height: 3px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 16px;
	text-transform: unset;
	min-height: 24px;
	min-width: 24px;
	padding: 4px 8px;
	color: #0079d3;
}
.fancy:hover {
	background-color: #dae0e6;
}

.temp {
	height: 155px;
	resize: vertical;
	color: #000;
}

/*@media (max-width: 1600px) {
	.icons-box .tool-tip:last-of-type li:nth-of-type(13),
	.icons-box .tool-tip:last-of-type li:nth-of-type(14),
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}*/
@media (max-width: 1287px) {
	.icons-box .tool-tip:nth-of-type(15) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}
@media (max-width: 1255px) {
	.icons-box .tool-tip:nth-of-type(14) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(14) {
		display: flex;
	}
}
@media (max-width: 1223px) {
	.icons-box .tool-tip:nth-of-type(13) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(13) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 1192px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 1146px) {
	.icons-box .tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 991px) {
	.icons-box div.tool-tip:nth-of-type(10),
	.icons-box div.tool-tip:nth-of-type(11),
	.icons-box div.tool-tip:nth-of-type(12),
	.icons-box div.tool-tip:nth-of-type(13),
	.icons-box div.tool-tip:nth-of-type(14),
	.icons-box div.tool-tip:nth-of-type(15) {
		display: block;
	}
	.icons-box .space-in {
		display: block;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10),
	.icons-box .tool-tip:last-of-type li:nth-of-type(11),
	.icons-box .tool-tip:last-of-type li:nth-of-type(12),
	.icons-box .tool-tip:last-of-type li:nth-of-type(13),
	.icons-box .tool-tip:last-of-type li:nth-of-type(14),
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: none;
	}
}
@media (max-width: 943px) {
	.icons-box div.tool-tip:nth-of-type(15) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(15) {
		display: flex;
	}
}
@media (max-width: 911px) {
	.icons-box div.tool-tip:nth-of-type(14) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(14) {
		display: flex;
	}
}
@media (max-width: 879px) {
	.icons-box div.tool-tip:nth-of-type(13) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(13) {
		display: flex;
	}
}
@media (max-width: 847px) {
	.icons-box div.tool-tip:nth-of-type(12) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(12) {
		display: flex;
	}
}
@media (max-width: 820px) {
	.icons-box div.tool-tip:nth-of-type(11) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 815px) {
	.icons-box .space-in {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(11) {
		display: flex;
	}
}
@media (max-width: 802px) {
	.icons-box div.tool-tip:nth-of-type(10) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(10) {
		display: flex;
	}
}
@media (max-width: 770px) {
	.icons-box div.tool-tip:nth-of-type(9) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(9) {
		display: flex;
	}
}
@media (max-width: 738px) {
	.icons-box div.tool-tip:nth-of-type(8) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(8) {
		display: flex;
	}
}
@media (max-width: 706px) {
	.icons-box div.tool-tip:nth-of-type(7) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(7) {
		display: flex;
	}
}
@media (max-width: 674px) {
	.icons-box div.tool-tip:nth-of-type(6) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(6) {
		display: flex;
	}
}
@media (max-width: 642px) {
	.icons-box div.tool-tip:nth-of-type(5) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(5) {
		display: flex;
	}
}
@media (max-width: 610px) {
	.icons-box div.tool-tip:nth-of-type(4) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(4) {
		display: flex;
	}
}

@media (max-width: 590px) {
	.icons-box div.tool-tip:nth-of-type(3) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(3) {
		display: flex;
	}
}
@media (max-width: 510px) {
	.icons-box div.tool-tip:nth-of-type(3) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(3) {
		display: flex;
	}
}
@media (max-width: 470px) {
	.icons-box div.tool-tip:nth-of-type(2) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(2) {
		display: flex;
	}
}
@media (max-width: 400px) {
	.icons-box div.tool-tip:nth-of-type(1) {
		display: none;
	}
	.icons-box .tool-tip:last-of-type li:nth-of-type(1) {
		display: flex;
	}
}
</style>
