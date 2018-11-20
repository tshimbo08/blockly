'''
    file
    brief
    note
    attention

    Copyright (c) 2018 KIKUSUI ELECTRONICS CORP
'''
__author__  = "t-shimbo"
__version__ = "0.10"
__date__    = "2018/10/31"

import os
import vxi11
import time

class tos9300():
    def __init__(self,addr):
        self.inst=vxi11.Instrument(addr)

    def Write(self,command):
        self.inst.write(command)

    def Read(self):
        return self.inst.read()

    def Ask(self,command):
        self.inst.write(command)
        return self.inst.read()

    def ACW(self,Start=None,State=None,Volt=None,Freq=None,Swe=None,Tim=None,Judg=None,JudgLow=None,JudgLowStat=None):
        self.inst.write("FUNC ACW")
        if Start !=  None:
            self.inst.write("ACW:Volt:START "+str(Start))
        if State !=  None:
            self.inst.write("ACW:Volt:START:STATE "+str(State))
        if Volt !=  None:
            self.inst.write("ACW:Volt "+str(Volt))
        if Freq !=  None:
            self.inst.write("ACW:Volt:Freq "+str(Freq))
        if Swe !=  None:
            self.inst.write("ACW:Volt:Swe:Tim "+str(Swe))
        if Tim !=  None:
            self.inst.write("ACW:VOLT:Tim "+str(Tim))
        if Judg !=  None:
            self.inst.write("SENS:ACW:Judg "+str(Judg))
        if JudgLow !=  None:
            self.inst.write("SENS:ACW:Judg:Low "+str(JudgLow))
        if JudgLowStat !=  None:
            self.inst.write("SENS:ACW:Judg:Low:STAT "+str(JudgLowStat))

    def DCW(self,Start=None,State=None,Volt=None,Swe=None,Tim=None,Judg=None,JudgLow=None,JudgLowStat=None,JudgDel=None):
        self.inst.write("FUNC DCW")
        if Start !=  None:
            self.inst.write("DCW:Volt:START "+str(Start))
        if State !=  None:
            self.inst.write("DCW:Volt:START:STATE "+str(State))
        if Volt !=  None:
            self.inst.write("DCW:Volt "+str(Volt))
        if Swe !=  None:
            self.inst.write("DCW:Volt:Swe:Tim "+str(Swe))
        if Tim !=  None:
            self.inst.write("DCW:VOLT:Tim "+str(Tim))
        if Judg !=  None:
            self.inst.write("SENS:DCW:Judg "+str(Judg))
        if JudgLow !=  None:
            self.inst.write("SENS:DCW:Judg:Low "+str(JudgLow))
        if JudgLowStat !=  None:
            self.inst.write("SENS:DCW:Judg:Low:STAT "+str(JudgLowStat))
        if JudgDel !=  None:
            self.inst.write("SENS:DCW:Judg:DEL "+str(JudgDel))

    def IR(self,Pol=None,Start=None,State=None,Volt=None,Swe=None,Tim=None,Judg=None,JudgLow=None,JudgLowStat=None,JudgDel=None):
        self.inst.write("FUNC IR")
        if Pol !=  None:
            self.inst.write("IR:VOLT:RANG "+str(Pol))
        if Start !=  None:
            self.inst.write("IR:Volt:START "+str(Start))
        if State !=  None:
            self.inst.write("IR:Volt:START:STATE "+str(State))
        if Volt !=  None:
            self.inst.write("IR:Volt "+str(Volt))
        if Swe !=  None:
            self.inst.write("IR:Volt:Swe:Tim "+str(Swe))
        if Tim !=  None:
            self.inst.write("IR:VOLT:Tim "+str(Tim))
        if Judg !=  None:
            self.inst.write("SENS:IR:Judg "+str(Judg))
        if JudgLow !=  None:
            self.inst.write("SENS:IR:Judg:Low "+str(JudgLow))
        if JudgLowStat !=  None:
            self.inst.write("SENS:IR:Judg:Low:STAT "+str(JudgLowStat))
        if JudgDel !=  None:
            self.inst.write("SENS:IR:Judg:DEL "+str(JudgDel))

    def WaitReadyIdle(self,timeout=None,undertime=None):
        n = 0
        while True:
            time.sleep(1)
            self.inst.write("STAT:OPER:TEST:COND?")
            sts = self.inst.read().strip()
            print(sts)
            if 0 != (int(sts) & (512+256)):
                if undertime != None:
                    if n < undertime:
                        return False
                return True
                return True
            n += 1
            if timeout != None:
                if n > timeout :
                    return False

    def getResult(self):
        ret = self.Ask("RES?").strip().split(',')
        return ret

    def getAutoResult(self):
        count = int(self.Ask("RES:COUNT?").strip())
        res = []
        for x in range(count):
            res.append(self.Ask("RES:REM?").strip().split(','))
        return res

    def getHCopy(self,filename):
        self.inst.write("HCOPy:SDUMp:DATA?")
        data1 = self.inst.read_raw()
        data2 = self.inst.read_raw()
        data3 = self.inst.read_raw()
        data4 = self.inst.read_raw()
        f = open(filename, 'wb')
        f.write(data1[8:])
        f.write(data2)
        f.write(data3)
        f.write(data4)
        f.close()

    def NewProgram(self,name):
        self.Write('PROG:DEL "'+name+'"')
        self.Write('PROG:CRE "'+name+'"')

    def Start(self):
        self.Write("ABOR")
        #self.Write("TRIG:TEST:SOUR BUS")
        time.sleep(0.2)
        self.Write("INIT:TEST")
        #time.sleep(0.1)

    def StartAuto(self,name):
        self.Write('PROG:SEL "'+name+'"')
        time.sleep(1)
        self.Write("ABOR")
        time.sleep(1)
        self.Write("TRIG:PROG:SOUR ONCE")
        time.sleep(1)
        self.Write("INIT:PROG")
        time.sleep(1)
        self.Write("INIT:TEST")
        time.sleep(1)

    def Program(self,Count=None,Inttim=None,Failcont=None):
        if Count !=  None:
            self.inst.write("PROG:STEPS:COUN "+str(Count))
        if Inttim !=  None:
            self.inst.write("PROG:INT:TIM "+str(Inttim))
        #if Failcont !=  None:
        #    self.inst.write("PROG:FAIL:COUT "+str(Failcont))


    def StepACW(self,No,Start=None,State=None,Volt=None,Freq=None,Tim=None,Swe=None,Judg=None,JudgLow=None,JudgLowStat=None):
        self.inst.write("PROG:STEP"+str(No)+":FUNC ACW")
        if Start !=  None:
            self.inst.write("PROG:STEP"+str(No)+":START "+str(Start))
        if State !=  None:
            self.inst.write("PROG:STEP"+str(No)+":START:STATE "+str(State))
        if Volt !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Volt "+str(Volt))
        if Freq !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Freq "+str(Freq))
        if Tim !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Tim "+str(Tim))
        if Swe !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Swe "+str(Swe))
        if Judg !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg "+str(Judg))
        if JudgLow !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:Low "+str(JudgLow))
        if JudgLowStat !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:Low:STAT "+str(JudgLowStat))

    def StepDCW(self,No,Start=None,State=None,Volt=None,Tim=None,Judg=None,JudgLow=None,JudgLowStat=None,JudgDel=None):
        self.inst.write("PROG:STEP"+str(No)+":FUNC DCW")
        if Start !=  None:
            self.inst.write("PROG:STEP"+str(No)+":START "+str(Start))
        if State !=  None:
            self.inst.write("PROG:STEP"+str(No)+":START:STATE "+str(State))
        if Volt !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Volt "+str(Volt))
        if Tim !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Tim "+str(Tim))
        if Judg !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg "+str(Judg))
        if JudgLow !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:Low "+str(JudgLow))
        if JudgLowStat !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:Low:STAT "+str(JudgLowStat))
        if JudgDel !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:DEL "+str(JudgDel))

    def StepIR(self,No,Start=None,State=None,Rang=None,Volt=None,Tim=None,Judg=None,JudgLow=None,JudgLowStat=None,JudgDel=None):
        self.inst.write("PROG:STEP"+str(No)+":FUNC IR")
        if Start !=  None:
            self.inst.write("PROG:STEP"+str(No)+":START "+str(Start))
        if State !=  None:
            self.inst.write("PROG:STEP"+str(No)+":START:STATE "+str(State))
        if Rang !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Rang "+str(Rang))
        if Volt !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Volt "+str(Volt))
        if Tim !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Tim "+str(Tim))
        if Judg !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:RES "+str(Judg))
        if JudgLow !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:RES:Low "+str(JudgLow))
        if JudgLowStat !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:RES:UPP:STAT "+str(JudgLowStat))
        if JudgDel !=  None:
            self.inst.write("PROG:STEP"+str(No)+":Judg:DEL "+str(JudgDel))


if __name__ == '__main__':
    tos = tos9300('192.168.29.2')
    print(tos.Ask("*IDN?"))
    #tos.NewProgram('/(BASIC)/New Program1')
    #tos.Program(3,0.5,0)
    #tos.ACW(Start=None,State=None,Volt=2000,Freq=60,Swe=1,Tim=5,Judg=0.01,JudgLow=None,JudgLowStat=None)
    #tos.StepIR(1,Start=0,State=0,Rang=7200,Volt=1000,Tim=5,Judg=10E+09,JudgLow=0,JudgLowStat=0,JudgDel=0.1)
    #tos.StepIR(2,Start=0,State=0,Rang=7200,Volt=1000,Tim=5,Judg=10E+09,JudgLow=0,JudgLowStat=0,JudgDel=0.1)
    #tos.StepIR(3,Start=0,State=0,Rang=7200,Volt=1000,Tim=5,Judg=10E+09,JudgLow=0,JudgLowStat=0,JudgDel=0.1)
    #tos.StartAuto('/(BASIC)/New Program1')
    for x in range(10):
        tos.ACW(Start=None,State=None,Volt=1000,Freq=50,Swe=None,Tim=5,Judg=10E-03,JudgLow=None,JudgLowStat=None)
        tos.Start()
        tos.WaitReadyIdle(100)
        print(tos.getResult())
        tos.Write("ABOR")
        tos.DCW(Start=None,State=None,Volt=1000,Swe=None,Tim=5,Judg=10E-03,JudgLow=None,JudgLowStat=None,JudgDel=None)
        tos.Start()
        tos.WaitReadyIdle(100)
        print(tos.getResult())
        tos.Write("ABOR")

        tos.IR(Pol="NORM",Start=None,State=None,Volt=500,Swe=None,Tim=5,Judg=10E+09,JudgLow=None,JudgLowStat=None,JudgDel=None)
        tos.Start()
        tos.WaitReadyIdle(100)
        print(tos.getResult())
        tos.Write("ABOR")
    #tos.getHCopy('tt.png')
