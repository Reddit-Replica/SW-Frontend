<template>
	<div class="big-box">
		<div class="icons-box">
			<div class="tool-tip">
				<span class="tool-tip-text">Bold</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-bold " />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Italics</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-italic" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Link</span>
				<button class="icons">
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
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-strikethrough" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Inline Code</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-code" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Superscript</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-superscript" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text">Spoiler</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-exclamation" />
					</div>
				</button>
			</div>
			<div class="space-in"></div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Heading</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-heading" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Bulleted List</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-list-ul" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Numbered List</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-list-ol" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Quote Block</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-quote-right" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Code Block</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-regular fa-file-code" />
					</div>
				</button>
			</div>
			<div class="space-in"></div>
			<div class="tool-tip">
				<span class="tool-tip-text">Table</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-solid fa-table" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Add an image</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-regular fa-image" />
					</div>
				</button>
			</div>
			<div class="tool-tip">
				<span class="tool-tip-text strike">Add a video</span>
				<button class="icons">
					<div class="icon">
						<font-awesome-icon icon="fa-brands fa-youtube" />
					</div>
				</button>
			</div>
			<button class="mark-down">Markdown Mode</button>
		</div>
		<div class="text-box">
			<!-- <div class="text-optitional"></div> -->
			<!-- <textarea class="text-box" placeholder="Text (optional)"> </textarea> -->
			<span class="text-optitional">Text (optional)</span>
		</div>
	</div>
</template>

<script>
export default {};
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
	margin: 16px;
	border: 1px solid #edeff1;
	border-radius: 4px;
	position: relative;
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

.text-optitional {
	position: absolute;
	content: 'Text (optional)';
	cursor: text;
	top: 1px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 30px;
	color: #6c6e70;
	font-family: inherit;
}
.icons {
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
	/*content: ; url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDMxLjkzIDM2NC4zNWMxMS4yMTEtMTUuMDkgMTYuNDEtMzMuODA5IDE0LjU5LTUyLjUyLTEuODIwMy0xOC43MDctMTAuNTMxLTM2LjA3LTI0LjQzOC00OC43MTktMTMuOTA2LTEyLjY0OC0zMi4wMi0xOS42NzItNTAuODE2LTE5LjcxNWgtOTQuNzE1djI2NS4yMWgxMjMuMTNjMjMuMDk4LTAuMDU4NTk0IDQ0LjkwNi0xMC42NDUgNTkuMjM0LTI4Ljc1NCAxNC4zMzItMTguMTA5IDE5LjYyMS00MS43NyAxNC4zNjctNjQuMjU4LTUuMjUzOS0yMi40OTItMjAuNDc3LTQxLjM1NS00MS4zNTItNTEuMjQyem0tMTE3LjQ5LTgzLjA2Nmg1Ni44MjhjMTMuNTM1IDAgMjYuMDQzIDcuMjIyNyAzMi44MTIgMTguOTQxIDYuNzY1NiAxMS43MjMgNi43NjU2IDI2LjE2OCAwIDM3Ljg4Ny02Ljc2OTUgMTEuNzIzLTE5LjI3NyAxOC45NDUtMzIuODEyIDE4Ljk0NWgtNTYuODI4em04NS4yNDIgMTg5LjQzaC04NS4yNDJ2LTc1Ljc3M2g4NS4yNDJjMTMuNTM1IDAgMjYuMDQzIDcuMjE4OCAzMi44MTIgMTguOTQxIDYuNzY1NiAxMS43MjMgNi43NjU2IDI2LjE2NCAwIDM3Ljg4Ny02Ljc2OTUgMTEuNzIzLTE5LjI3NyAxOC45NDUtMzIuODEyIDE4Ljk0NXoiIGZpbGw9IiM2NzY3NjciLz4KPC9zdmc+Cg==);*/
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
.tool-tip:hover .tool-tip-text {
	top: -40px;
	visibility: visible;
	opacity: 1;
}
.mark-down {
	border-radius: 9999px;
	position: absolute;
	left: 88%;
	width: 94px;
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
}
.mark-down:hover {
	background-color: #ccc;
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
</style>
