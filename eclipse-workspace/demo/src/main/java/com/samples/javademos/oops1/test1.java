package com.samples.javademos.oops1;

public class PC {
	
		public static void main(String args[]) {
			System.out.print("Hello");
		}
		private BoxCase boxCase;
		private Monitor monitor;
		private MotherBoard motherBoard;
		public PC(BoxCase boxCase, Monitor monitor, MotherBoard motherBoard) {
			this.boxCase = boxCase;
			this.monitor = monitor;
			this.motherBoard = motherBoard;
		}
		public void powerUp() {
			boxCase.pressPowerButton();
			drawLogo();
			motherBoard.loadProgram("Windows 10");
		}
		private void drawLogo() {
			monitor.drawPixelAt(1200,50,"yellow");
		}

	}
